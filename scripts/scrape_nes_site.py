from __future__ import annotations

import argparse
import html
import re
import textwrap
import time
from collections import deque
from dataclasses import dataclass
from html.parser import HTMLParser
from pathlib import Path
from typing import Iterable
from urllib.parse import urldefrag, urljoin, urlparse
from urllib.request import Request, urlopen
from xml.etree import ElementTree


DEFAULT_START_URL = "https://www.nexpertsolutions.com/"
USER_AGENT = "NES website text scraper/1.0 (+local project archive)"
SKIP_EXTENSIONS = {
    ".7z",
    ".avi",
    ".css",
    ".doc",
    ".docx",
    ".gif",
    ".ico",
    ".jpeg",
    ".jpg",
    ".js",
    ".json",
    ".mp3",
    ".mp4",
    ".pdf",
    ".png",
    ".rar",
    ".svg",
    ".tar",
    ".webm",
    ".webp",
    ".xls",
    ".xlsx",
    ".zip",
}


@dataclass
class PageResult:
    url: str
    title: str
    text: str


class ReadableTextParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.links: list[str] = []
        self.title_parts: list[str] = []
        self.text_parts: list[str] = []
        self._tag_stack: list[str] = []
        self._skip_depth = 0
        self._in_title = False

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        tag = tag.lower()
        self._tag_stack.append(tag)

        if tag in {"script", "style", "noscript", "svg", "canvas"}:
            self._skip_depth += 1

        if tag == "title":
            self._in_title = True

        if tag == "a":
            href = dict(attrs).get("href")
            if href:
                self.links.append(href)

        if tag in {"br", "p", "div", "section", "article", "header", "footer", "li", "tr", "h1", "h2", "h3", "h4"}:
            self.text_parts.append("\n")

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()

        if tag == "title":
            self._in_title = False

        if tag in {"script", "style", "noscript", "svg", "canvas"} and self._skip_depth:
            self._skip_depth -= 1

        if tag in {"p", "div", "section", "article", "li", "tr", "h1", "h2", "h3", "h4"}:
            self.text_parts.append("\n")

        if self._tag_stack:
            self._tag_stack.pop()

    def handle_data(self, data: str) -> None:
        if self._skip_depth:
            return

        cleaned = normalize_spaces(data)
        if not cleaned:
            return

        if self._in_title:
            self.title_parts.append(cleaned)
            return

        self.text_parts.append(cleaned)
        self.text_parts.append(" ")

    @property
    def title(self) -> str:
        return normalize_spaces(" ".join(self.title_parts))

    @property
    def text(self) -> str:
        return normalize_text("\n".join(self.text_parts))


def normalize_spaces(value: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(value)).strip()


def normalize_text(value: str) -> str:
    value = html.unescape(value)
    value = re.sub(r"[ \t\r\f\v]+", " ", value)
    value = re.sub(r" *\n+ *", "\n", value)
    value = re.sub(r"\n{3,}", "\n\n", value)
    lines = [line.strip() for line in value.splitlines()]
    return "\n".join(line for line in lines if line).strip()


def is_internal_url(url: str, domain: str) -> bool:
    parsed = urlparse(url)
    return parsed.scheme in {"http", "https"} and parsed.netloc.lower().replace("www.", "") == domain


def normalize_url(url: str, base_url: str, domain: str) -> str | None:
    absolute = urljoin(base_url, url)
    absolute, _ = urldefrag(absolute)
    parsed = urlparse(absolute)

    if parsed.scheme not in {"http", "https"}:
        return None

    normalized_domain = parsed.netloc.lower().replace("www.", "")
    if normalized_domain != domain:
        return None

    if any(parsed.path.lower().endswith(ext) for ext in SKIP_EXTENSIONS):
        return None

    path = parsed.path or "/"
    if path != "/" and path.endswith("/"):
        path = path[:-1]

    return parsed._replace(path=path, query="").geturl()


def fetch_url(url: str, timeout: int) -> tuple[str, str]:
    request = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(request, timeout=timeout) as response:
        content_type = response.headers.get("content-type", "")
        charset = response.headers.get_content_charset() or "utf-8"
        body = response.read()
    return content_type, body.decode(charset, errors="replace")


def fetch_sitemap_urls(start_url: str, domain: str, timeout: int) -> list[str]:
    sitemap_urls = [
        urljoin(start_url, "/sitemap.xml"),
        urljoin(start_url, "/sitemap_index.xml"),
    ]
    discovered: list[str] = []
    seen_sitemaps: set[str] = set()

    def read_sitemap(sitemap_url: str) -> None:
        if sitemap_url in seen_sitemaps:
            return
        seen_sitemaps.add(sitemap_url)

        try:
            content_type, xml_text = fetch_url(sitemap_url, timeout)
        except Exception:
            return

        if "xml" not in content_type and not xml_text.lstrip().startswith("<?xml"):
            return

        try:
            root = ElementTree.fromstring(xml_text.encode("utf-8"))
        except ElementTree.ParseError:
            return

        for loc in root.iter():
            if loc.tag.endswith("loc") and loc.text:
                candidate = loc.text.strip()
                if candidate.endswith(".xml"):
                    read_sitemap(candidate)
                    continue

                normalized = normalize_url(candidate, start_url, domain)
                if normalized:
                    discovered.append(normalized)

    for sitemap_url in sitemap_urls:
        read_sitemap(sitemap_url)

    return list(dict.fromkeys(discovered))


def parse_page(url: str, html_text: str) -> tuple[PageResult, list[str]]:
    parser = ReadableTextParser()
    parser.feed(html_text)
    title = parser.title or url
    page = PageResult(url=url, title=title, text=parser.text)
    return page, parser.links


def safe_filename(index: int, title: str) -> str:
    cleaned = re.sub(r"[^a-zA-Z0-9]+", "-", title).strip("-").lower()
    return f"{index:04d}-{cleaned[:80] or 'page'}.txt"


def write_pdf(path: Path, lines: Iterable[str]) -> None:
    pages: list[list[str]] = []
    current: list[str] = []

    for raw_line in lines:
        wrapped = textwrap.wrap(raw_line, width=92) or [""]
        for line in wrapped:
            current.append(line)
            if len(current) >= 48:
                pages.append(current)
                current = []

    if current:
        pages.append(current)

    objects: list[bytes] = []
    page_object_ids: list[int] = []

    def add_object(content: bytes) -> int:
        objects.append(content)
        return len(objects)

    font_id = add_object(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")

    for page_lines in pages:
        text_commands = ["BT", "/F1 10 Tf", "42 760 Td", "14 TL"]
        for line in page_lines:
            safe_line = line.encode("latin-1", errors="replace").decode("latin-1")
            safe_line = safe_line.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
            text_commands.append(f"({safe_line}) Tj")
            text_commands.append("T*")
        text_commands.append("ET")
        stream = "\n".join(text_commands).encode("latin-1")
        content_id = add_object(b"<< /Length " + str(len(stream)).encode() + b" >>\nstream\n" + stream + b"\nendstream")
        page_id = add_object(
            f"<< /Type /Page /Parent 0 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 {font_id} 0 R >> >> /Contents {content_id} 0 R >>".encode()
        )
        page_object_ids.append(page_id)

    kids = " ".join(f"{page_id} 0 R" for page_id in page_object_ids)
    pages_id = add_object(f"<< /Type /Pages /Kids [{kids}] /Count {len(page_object_ids)} >>".encode())
    catalog_id = add_object(f"<< /Type /Catalog /Pages {pages_id} 0 R >>".encode())

    patched_objects = []
    for index, content in enumerate(objects, start=1):
        if b"/Parent 0 0 R" in content:
            content = content.replace(b"/Parent 0 0 R", f"/Parent {pages_id} 0 R".encode())
        patched_objects.append(content)

    output = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    for index, content in enumerate(patched_objects, start=1):
        offsets.append(len(output))
        output.extend(f"{index} 0 obj\n".encode())
        output.extend(content)
        output.extend(b"\nendobj\n")

    xref_start = len(output)
    output.extend(f"xref\n0 {len(patched_objects) + 1}\n".encode())
    output.extend(b"0000000000 65535 f \n")
    for offset in offsets[1:]:
        output.extend(f"{offset:010d} 00000 n \n".encode())
    output.extend(
        f"trailer\n<< /Size {len(patched_objects) + 1} /Root {catalog_id} 0 R >>\nstartxref\n{xref_start}\n%%EOF".encode()
    )
    path.write_bytes(output)


def crawl(start_url: str, output_dir: Path, max_pages: int, delay: float, timeout: int) -> list[PageResult]:
    parsed_start = urlparse(start_url)
    domain = parsed_start.netloc.lower().replace("www.", "")

    queue = deque([start_url])
    queue.extend(fetch_sitemap_urls(start_url, domain, timeout))
    seen: set[str] = set()
    results: list[PageResult] = []

    pages_dir = output_dir / "pages"
    pages_dir.mkdir(parents=True, exist_ok=True)

    while queue and len(results) < max_pages:
        url = queue.popleft()
        normalized = normalize_url(url, start_url, domain)
        if not normalized or normalized in seen:
            continue
        seen.add(normalized)

        try:
            content_type, body = fetch_url(normalized, timeout)
            if "html" not in content_type:
                continue
            page, links = parse_page(normalized, body)
        except Exception as exc:
            print(f"SKIP {normalized} ({exc})")
            continue

        if page.text:
            results.append(page)
            page_path = pages_dir / safe_filename(len(results), page.title)
            page_path.write_text(format_page(page), encoding="utf-8")
            print(f"{len(results):04d} {page.title} - {normalized}")

        for link in links:
            next_url = normalize_url(link, normalized, domain)
            if next_url and next_url not in seen:
                queue.append(next_url)

        time.sleep(delay)

    return results


def format_page(page: PageResult) -> str:
    return f"TITLE: {page.title}\nURL: {page.url}\n\n{page.text}\n"


def main() -> None:
    parser = argparse.ArgumentParser(description="Crawl NES website pages and export readable text/PDF.")
    parser.add_argument("--start-url", default=DEFAULT_START_URL)
    parser.add_argument("--output-dir", default="scraped_nes_site")
    parser.add_argument("--max-pages", type=int, default=5000)
    parser.add_argument("--delay", type=float, default=0.25)
    parser.add_argument("--timeout", type=int, default=20)
    args = parser.parse_args()

    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    results = crawl(args.start_url, output_dir, args.max_pages, args.delay, args.timeout)
    combined_text = output_dir / "nes-website-complete-text.txt"
    combined_text.write_text("\n\n" + ("=" * 90 + "\n\n").join(format_page(page) for page in results), encoding="utf-8")

    pdf_path = output_dir / "nes-website-complete-text.pdf"
    pdf_lines = combined_text.read_text(encoding="utf-8").splitlines()
    write_pdf(pdf_path, pdf_lines)

    print()
    print(f"Scraped pages: {len(results)}")
    print(f"Text output: {combined_text}")
    print(f"PDF output: {pdf_path}")


if __name__ == "__main__":
    main()
