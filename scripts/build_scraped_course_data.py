from __future__ import annotations

import json
import re
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parents[1]
PAGES_DIR = ROOT / "scraped_nes_site" / "pages"
OUTPUT = ROOT / "src" / "app" / "website" / "data" / "scraped-course-content.data.ts"

MENU_START = "Call us for help"
MENU_END = "Contact Us"
SECTION_STOPS = [
    "Download ",
    "Services Provided",
    "What You Learn",
    "Pre-requisite",
    "PRE-REQUISITE",
    "Prerequisites",
    "Next Steps",
    "Why Choose",
    "FAQ",
    "Training Duration",
    "Exam Description",
]


def clean_text(value: str) -> str:
    replacements = {
        "Ã—": "x",
        "Ã¢â‚¬â€œ": "-",
        "Ã¢â‚¬â„¢": "'",
        "â€“": "-",
        "â€™": "'",
        "â€œ": '"',
        "â€": '"',
        "â€˜": "'",
        "â€¢": "-",
        "Ã—": "x",
        "24Ã—7": "24x7",
        "PPTâ€™s": "PPTs",
        "Videoâ€™s": "Videos",
        "Webinarâ€™s": "Webinars",
        "MNCâ€™s": "MNCs",
    }
    for bad, good in replacements.items():
        value = value.replace(bad, good)
    value = re.sub(r"\s+", " ", value).strip()
    return value


def normalize_url(url: str) -> str:
    parsed = urlparse(url.strip())
    path = parsed.path.replace("/index.php", "")
    if path != "/" and path.endswith("/"):
        path = path[:-1]
    return f"https://www.nexpertsolutions.com{path}"


def lines_from_file(path: Path) -> tuple[str, str, list[str]]:
    raw = path.read_text(encoding="utf-8", errors="replace")
    lines = [clean_text(line) for line in raw.splitlines()]
    lines = [line for line in lines if line]
    title = lines[0].replace("TITLE:", "").strip() if lines else path.stem
    url = lines[1].replace("URL:", "").strip() if len(lines) > 1 else ""
    return clean_text(title), normalize_url(url), lines[2:]


def strip_site_menu(lines: list[str]) -> list[str]:
    try:
        start = lines.index(MENU_START)
        end = max(i for i, line in enumerate(lines[:95]) if line == MENU_END)
        return lines[:start] + lines[end + 1 :]
    except ValueError:
        return lines


def first_index(lines: list[str], patterns: list[str], start: int = 0) -> int | None:
    for index in range(start, len(lines)):
        line = lines[index].lower()
        if any(pattern.lower() in line for pattern in patterns):
            return index
    return None


def find_stop(lines: list[str], start: int, extra: list[str] | None = None) -> int:
    stops = SECTION_STOPS + (extra or [])
    found = first_index(lines, stops, start)
    return found if found is not None else len(lines)


def sentences(lines: list[str], limit: int = 3) -> list[str]:
    joined = " ".join(lines)
    parts = re.split(r"(?<=[.!?])\s+", joined)
    return [clean_text(part) for part in parts if len(clean_text(part)) > 25][:limit]


def compact_items(lines: list[str], limit: int = 18) -> list[str]:
    items: list[str] = []
    skip_exact = {":", "Material:", "Support:", "Webinar:", "Placement:", "NES Certificate:", "Vendor Exam:"}
    for line in lines:
        line = clean_text(line.strip(":- "))
        if not line or line in skip_exact:
            continue
        if len(line) > 160:
            continue
        if re.match(r"^\d+\.\s", line):
            continue
        items.append(line)
    deduped = list(dict.fromkeys(items))
    return deduped[:limit]


def extract_meta(lines: list[str], fallback_title: str) -> dict:
    overview = first_index(lines, ["Overview"]) or min(len(lines), 12)
    before = lines[:overview]

    hours = 0
    mode = "Online/Classroom"
    students = ""
    rating = ""
    reviews = 0
    headline = fallback_title
    guidance = "Get Expert Guide For Your Better Career Guidance."

    for index, line in enumerate(before):
        hour_match = re.search(r"(\d+)\s*Hours", line, re.I)
        if hour_match:
            hours = int(hour_match.group(1))
        if re.search(r"Online|Classroom|Offline", line, re.I):
            mode = line.replace("Online-Classroom", "Online/Classroom")
        student_match = re.search(r"(\d[\d,]*)\s+Student", line, re.I)
        if student_match:
            students = student_match.group(1)
        if re.fullmatch(r"\d(?:\.\d)?", line):
            rating = line
        review_match = re.search(r"(\d[\d,]*)\s+Reviews", line, re.I)
        if review_match:
            reviews = int(review_match.group(1).replace(",", ""))
        if "Certification Training" in line or "Training Course" in line:
            headline = line
        if "Guide" in line and "Career" in line:
            guidance = line.strip('"')

    stats = []
    if hours:
        stats.append(f"{hours} Hours")
    if mode:
        stats.append(mode)
    if students:
        stats.append(f"{students} Student Enrolled")

    rating_text = ""
    if rating and reviews:
        rating_text = f"{rating} | {reviews} Reviews"

    return {
        "hours": hours,
        "training_mode": mode,
        "headline": headline,
        "stats_line": " | ".join(stats),
        "guidance_quote": guidance,
        "rating_text": rating_text,
        "reviews": reviews,
    }


def extract_sections(lines: list[str]) -> dict:
    overview_index = first_index(lines, ["Overview"])
    overview_lines: list[str] = []
    major_topics: list[str] = []
    services: list[str] = []
    outcome: list[str] = []
    prerequisites: list[str] = []
    next_steps: list[str] = []
    why_nes: list[str] = []
    syllabus: list[str] = []
    faqs: list[str] = []

    if overview_index is not None:
        start = overview_index + 1
        stop = find_stop(lines, start)
        overview_lines = lines[start:stop]

    topic_index = first_index(lines, ["Covers These Major Topics", "Covers A Wide Range Of Topics", "including:"])
    if topic_index is not None:
        stop = find_stop(lines, topic_index + 1, ["Why Choose Our Course"])
        major_topics = compact_items(lines[topic_index + 1 : stop], 14)

    services_index = first_index(lines, ["Services Provided"])
    if services_index is not None:
        stop = find_stop(lines, services_index + 1)
        services = compact_items(lines[services_index + 1 : stop], 12)

    outcome_index = first_index(lines, ["What You Learn"])
    if outcome_index is not None:
        stop = find_stop(lines, outcome_index + 1)
        outcome = sentences(lines[outcome_index + 1 : stop], 2)

    prereq_index = first_index(lines, ["Pre-requisite", "PRE-REQUISITE", "Prerequisites"])
    if prereq_index is not None:
        stop = find_stop(lines, prereq_index + 1)
        prerequisites = compact_items(lines[prereq_index + 1 : stop], 8)

    next_index = first_index(lines, ["Next Steps"])
    if next_index is not None:
        stop = find_stop(lines, next_index + 1)
        next_steps = compact_items(lines[next_index + 1 : stop], 10)

    why_index = first_index(lines, ["Why Choose"])
    if why_index is not None:
        stop = find_stop(lines, why_index + 1, ["Implementing ", "Exam Description"])
        why_nes = compact_items(lines[why_index + 1 : stop], 16)

    exam_index = first_index(lines, ["Exam Description", "Exam Syllabus", "Implementing Cisco", "Cisco CCNA Exam"])
    if exam_index is not None:
        stop = first_index(lines, ["FAQ", "Training Duration"], exam_index + 1) or min(len(lines), exam_index + 38)
        syllabus = compact_items(lines[exam_index:stop], 24)

    faq_index = first_index(lines, ["FAQ"])
    if faq_index is not None:
        stop = first_index(lines, ["Training Duration"], faq_index + 1) or len(lines)
        faq_candidates = compact_items(lines[faq_index + 1 : stop], 18)
        faqs = [item for item in faq_candidates if "?" in item or re.match(r"^\d+\.", item)]
        if not faqs:
            faqs = faq_candidates[:8]

    overview_paragraphs = sentences(overview_lines, 4)
    if not overview_paragraphs and overview_lines:
        overview_paragraphs = compact_items(overview_lines, 3)

    return {
        "overview": overview_paragraphs,
        "major_topics": major_topics[:8],
        "services": services[:6],
        "training_outcome": " ".join(outcome),
        "prerequisites": prerequisites[:5],
        "next_steps": next_steps[:6],
        "why_nes": why_nes[:8],
        "syllabus": syllabus[:10],
        "faqs": faqs[:6],
    }


def extract_training_info(lines: list[str], meta: dict) -> list[dict[str, str]]:
    info = []
    if meta.get("hours"):
        info.append({"label": "Training Duration", "value": f"{meta['hours']} Hours"})
    info.append({"label": "Language", "value": "English | Hindi"})
    info.append({"label": "Training Mode", "value": meta.get("training_mode") or "Online/Classroom"})

    labels = [
        "Exam Code",
        "Certification Cost",
        "Tuesday-Friday",
        "Saturday-Sunday",
    ]
    for label in labels:
        index = first_index(lines, [label])
        if index is not None and index + 1 < len(lines):
            info.append({"label": label, "value": lines[index + 1]})

    return info


def is_course_url(url: str) -> bool:
    path = urlparse(url).path
    if "/blogs" in path or path in {"", "/", "/about-us", "/contact-us", "/terms-and-conditions", "/policy", "/refund-policy", "/reschedule-policy"}:
        return False
    return any(part in path for part in ["/cisco", "/checkpoint", "/microsoft", "/juniper", "/vmware", "/comptia", "/cloud", "/f5", "/palo-alto", "/job-guarantee-courses", "redhat-linux"])


def build_record(path: Path) -> dict | None:
    title, url, lines = lines_from_file(path)
    url = normalize_url(url)
    if not is_course_url(url):
        return None

    lines = strip_site_menu(lines)
    meta = extract_meta(lines, title)
    sections = extract_sections(lines)

    overview = sections.get("overview") or []
    summary = overview[0] if overview else title.replace(" | Nexpertsolutions", "")
    modules = sections.get("major_topics") or sections.get("syllabus")[:6] or ["Overview", "Labs", "Certification Guidance"]

    page_sections = {
        "headline": meta["headline"],
        "stats_line": meta["stats_line"],
        "guidance_quote": meta["guidance_quote"],
        "rating_text": meta["rating_text"],
        "overview": overview,
        "major_topics": modules,
        "services": sections.get("services"),
        "training_outcome": sections.get("training_outcome"),
        "prerequisites": sections.get("prerequisites"),
        "next_steps": sections.get("next_steps"),
        "why_nes": sections.get("why_nes"),
        "syllabus": sections.get("syllabus"),
        "faqs": sections.get("faqs"),
        "training_info": extract_training_info(lines, meta),
    }
    page_sections = {key: value for key, value in page_sections.items() if value}

    return {
        "url": url,
        "title": title.replace(" | Nexpertsolutions", ""),
        "hours": meta["hours"],
        "reviews": meta["reviews"],
        "training_mode": meta["training_mode"],
        "language": "English | Hindi",
        "source_summary": summary[:280],
        "modules": modules[:8],
        "page_sections": page_sections,
    }


def main() -> None:
    records = []
    seen_urls = set()
    for path in sorted(PAGES_DIR.glob("*.txt")):
        record = build_record(path)
        if not record or record["url"] in seen_urls:
            continue
        seen_urls.add(record["url"])
        records.append(record)

    payload = json.dumps(records, ensure_ascii=False, indent=2)
    OUTPUT.write_text(
        "import { Course } from './courses.data';\n\n"
        "export type ScrapedCourseContent = Partial<Course> & { url: string };\n\n"
        f"export const SCRAPED_COURSE_CONTENT: ScrapedCourseContent[] = {payload};\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(records)} records to {OUTPUT}")


if __name__ == "__main__":
    main()
