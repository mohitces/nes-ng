import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ALL_COURSE_PAGES } from '../../data/all-course-pages.data';
import { Course, TOP_COURSES } from '../../data/courses.data';
import { CourseApiService } from '../../services/course-api.service';

interface CourseContentSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
  accordion?: string[];
}

interface SidebarRow {
  label: string;
  value: string;
  isContact?: boolean;
}

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent {
  course?: Course;
  fallbackTitle = '';
  sourceUrl = '';
  enquiryCourses = ALL_COURSE_PAGES.map((course) => course.title);
  coursePages = [...TOP_COURSES, ...ALL_COURSE_PAGES];

  constructor(private route: ActivatedRoute, private courseApi: CourseApiService) {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || '';
      this.course = this.coursePages.find(c => this.toSlug(c.title) === slug) || ALL_COURSE_PAGES[0];
      this.courseApi.getLiveCourses().subscribe((liveCourses) => {
        this.coursePages = this.mergeCoursePages(liveCourses, [...TOP_COURSES, ...ALL_COURSE_PAGES]);
        this.enquiryCourses = this.coursePages.map((course) => course.title);
        this.course = this.coursePages.find(c => this.toSlug(c.title) === slug) || this.course;
      });
    });
    this.route.queryParamMap.subscribe(params => {
      this.fallbackTitle = params.get('title') || '';
      this.sourceUrl = params.get('source') || '';
    });
  }

  private mergeCoursePages(...groups: Course[][]): Course[] {
    const seen = new Set<string>();
    const pages: Course[] = [];

    groups.flat().forEach((course) => {
      const key = this.toSlug(course.title);
      if (seen.has(key)) return;
      seen.add(key);
      pages.push(course);
    });

    return pages;
  }

  toSlug(value: string): string {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  get pageTitle(): string {
    return this.fallbackTitle || this.course?.title || 'Course Details';
  }

  get headline(): string {
    return this.course?.page_sections?.headline || `${this.pageTitle} Certification Training Course Online`;
  }

  get bannerImage(): string {
    return this.course?.page_sections?.banner_image || 'assets/images/banners/1.png';
  }

  get heroTags(): string[] {
    const titleTag = this.pageTitle.split(/\s+/)[0] || 'NES';
    const moduleTag = this.course?.modules?.[0]?.split(/\s+/)[0] || 'Course';
    return Array.from(new Set(['NES', titleTag, moduleTag])).slice(0, 3);
  }

  get studentCount(): string {
    const stats = this.course?.page_sections?.stats_line || '';
    const match = stats.match(/(\d[\d,]*)\s+Student/i);
    return match ? match[1] : '24596';
  }

  get ratingText(): string {
    return this.course?.page_sections?.rating_text || `4.7 | ${this.course?.reviews || 0} Reviews`;
  }

  get contentSections(): CourseContentSection[] {
    const sections = this.course?.page_sections;
    const content: CourseContentSection[] = [
      {
        title: 'Overview',
        paragraphs: sections?.overview || (this.course?.source_summary ? [this.course.source_summary] : [])
      },
      {
        title: 'Major Topics',
        items: sections?.major_topics || this.course?.modules || []
      },
      {
        title: 'Services Provided By NES',
        items: sections?.services || []
      },
      {
        title: 'What You Learn',
        paragraphs: sections?.training_outcome ? [sections.training_outcome] : []
      },
      {
        title: 'Prerequisites: What You Need to Know',
        paragraphs: this.course?.prerequisite ? [this.course.prerequisite] : [],
        items: sections?.prerequisites || []
      },
      {
        title: 'Next Steps',
        items: sections?.next_steps || []
      },
      {
        title: 'Training Options',
        items: sections?.training_options || []
      },
      {
        title: 'Why Choose NES',
        items: sections?.why_nes || []
      },
      {
        title: 'Exam Syllabus and Topics',
        accordion: sections?.syllabus || []
      },
      {
        title: 'FAQ',
        accordion: sections?.faqs || []
      }
    ];

    return content.filter((section) =>
      Boolean(section.paragraphs?.length || section.items?.length || section.accordion?.length)
    );
  }

  get sidebarRows(): SidebarRow[] {
    if (!this.course) return [];

    const rows = new Map<string, string>();
    (this.course.page_sections?.training_info || []).forEach((item) => {
      if (!/enquiry|source url/i.test(item.label)) {
        rows.set(item.label, item.value);
      }
    });

    if (!rows.has('Training Duration')) rows.set('Training Duration', `${this.course.hours || 'To be updated'} Hours`);
    if (!rows.has('Language')) rows.set('Language', this.course.language || 'English | Hindi');
    if (!rows.has('Training Mode')) rows.set('Training Mode', this.course.training_mode || 'Online/Classroom');
    if (!rows.has('Training Cost')) rows.set('Training Cost', 'Contact Coordinator');

    const examCode = this.pageTitle.match(/\d{3}-\d{3}/)?.[0];
    if (examCode && !rows.has('Exam Code')) rows.set('Exam Code', examCode);

    const orderedLabels = [
      'Training Duration',
      'Exam Code',
      'Language',
      'Training Cost',
      'Certification Cost',
      'Tuesday-Friday',
      'Saturday-Sunday',
      'Training Mode'
    ];

    const orderedRows = orderedLabels
      .filter((label) => rows.has(label))
      .map((label) => ({
        label,
        value: rows.get(label) || '',
        isContact: label === 'Training Cost'
      }));

    const extraRows = Array.from(rows.entries())
      .filter(([label]) => !orderedLabels.includes(label))
      .map(([label, value]) => ({ label, value }));

    return [...orderedRows, ...extraRows];
  }
}
