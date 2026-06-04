import { Component } from '@angular/core';
import { ALL_COURSE_PAGES } from '../../data/all-course-pages.data';
import { Course } from '../../data/courses.data';
import { SCRAPED_COURSE_CONTENT } from '../../data/scraped-course-content.data';

interface CourseCategory {
  label: string;
  terms: string[];
}

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.scss'
})
export class AllCoursesComponent {
  courses = this.buildCourseCatalog();
  selectedCategory = 'All';
  selectedTrainingMode = 'All Modes';
  searchTerm = '';
  openDropdown: 'category' | 'mode' | null = null;

  categories: CourseCategory[] = [
    { label: 'All', terms: [] },
    { label: 'CISCO', terms: ['ccna', 'ccnp', 'ccie', 'sd-wan', 'sd-access', 'aci', 'vxlan', 'ise', 'nexus', 'bgp', 'mpls', 'firepower', 'devnet', 'segment'] },
    { label: 'CHECKPOINT', terms: ['ccsa', 'ccse', 'checkpoint'] },
    { label: 'MICROSOFT', terms: ['mcsa', 'microsoft', 'azure'] },
    { label: 'JUNIPER', terms: ['jncia', 'jncis', 'jncip', 'juniper'] },
    { label: 'VMware', terms: ['vca', 'vcp', 'vmware'] },
    { label: 'COMPTIA', terms: ['a+', 'n+', 'server+', 'casp', 'comptia'] },
    { label: 'CLOUD', terms: ['aws', 'azure', 'gca', 'gcp', 'cloud'] },
    { label: 'F5', terms: ['f5', 'ltm', 'asm', 'gtm', 'tmos'] },
    { label: 'REDHAT-LINUX', terms: ['redhat', 'linux'] },
    { label: 'PALO-ALTO', terms: ['palo', 'ace', 'pcnse', 'panorama'] },
    { label: 'Most Popular Combo', terms: ['zero to hero', 'master', 'integrated', 'combo', 'job-ready', 'ncne'] }
  ];

  trainingModes = ['All Modes', 'Online', 'Offline', 'Hybrid'];

  get filteredCourses(): Course[] {
    const query = this.searchTerm.trim().toLowerCase();
    const category = this.categories.find((item) => item.label === this.selectedCategory);

    return this.courses.filter((course) => {
      const haystack = [
        course.title,
        course.source_summary,
        course.training_mode,
        course.language,
        course.prerequisite,
        ...(course.modules || [])
      ].join(' ').toLowerCase();

      const matchesSearch = !query || haystack.includes(query);
      const matchesCategory = !category?.terms.length || category.terms.some((term) => haystack.includes(term));
      const matchesTrainingMode =
        this.selectedTrainingMode === 'All Modes' ||
        (this.selectedTrainingMode === 'Hybrid' && haystack.includes('online/classroom')) ||
        (this.selectedTrainingMode === 'Online' && haystack.includes('online')) ||
        (this.selectedTrainingMode === 'Offline' && haystack.includes('classroom'));

      return matchesSearch && matchesCategory && matchesTrainingMode;
    });
  }

  get featuredCourse(): Course {
    return this.courses[0];
  }

  setCategory(label: string) {
    this.selectedCategory = label;
    this.openDropdown = null;
  }

  setTrainingMode(mode: string) {
    this.selectedTrainingMode = mode;
    this.openDropdown = null;
  }

  toggleDropdown(name: 'category' | 'mode') {
    this.openDropdown = this.openDropdown === name ? null : name;
  }

  updateSearch(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  toSlug(value: string): string {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  courseLevel(course: Course): string {
    const title = course.title.toLowerCase();
    if (title.includes('ccie') || title.includes('expert') || title.includes('master')) return 'Expert Track';
    if (title.includes('ccnp') || title.includes('jncip') || title.includes('professional')) return 'Professional';
    if (title.includes('associate') || title.includes('ccna') || title.includes('jncia')) return 'Associate';
    return 'Specialized';
  }

  displayHours(course: Course): string {
    return course.hours ? `${course.hours} Hours` : 'Flexible Duration';
  }

  displayReviews(course: Course): string {
    return course.reviews ? `${course.reviews} Reviews` : 'Mentor Rated';
  }

  displayValidTill(course: Course): string {
    return course.valid_till && course.valid_till !== 'To be updated' ? course.valid_till : '30-06-2026';
  }

  displayDiscountedPrice(course: Course): string {
    return course.price.discounted && course.price.discounted !== 'Contact coordinator'
      ? course.price.discounted
      : 'Contact coordinator';
  }

  showOriginalPrice(course: Course): boolean {
    return Boolean(course.price.original && course.price.original !== 'Contact coordinator');
  }

  private buildCourseCatalog(): Course[] {
    const seen = new Set<string>();
    const catalog: Course[] = [];

    const addCourse = (course: Course) => {
      const key = this.normalizeCourseKey(course.url || course.title);
      if (seen.has(key)) return;
      seen.add(key);
      catalog.push(course);
    };

    ALL_COURSE_PAGES.forEach(addCourse);

    SCRAPED_COURSE_CONTENT.forEach((scraped, index) => {
      const key = this.normalizeCourseKey(scraped.url || scraped.title || '');
      if (seen.has(key) || !scraped.title) return;

      addCourse({
        index: ALL_COURSE_PAGES.length + index + 1,
        title: scraped.title,
        image: scraped.image || ALL_COURSE_PAGES[0].image,
        url: scraped.url,
        modules: scraped.modules || scraped.page_sections?.major_topics || ['Overview', 'Labs', 'Certification Guidance'],
        valid_till: scraped.valid_till || '30-06-2026',
        reviews: scraped.reviews || 0,
        hours: scraped.hours || 0,
        buy_url: scraped.buy_url || scraped.url,
        price: scraped.price || {
          discounted: 'Contact coordinator',
          original: 'Contact coordinator',
          discount_percent: 0
        },
        source_summary: scraped.source_summary || `${scraped.title} training course from NES scraped course content.`,
        training_mode: scraped.training_mode || 'Online/Classroom',
        language: scraped.language || 'English | Hindi',
        prerequisite: scraped.prerequisite || 'As per NES live page',
        page_sections: scraped.page_sections
      });
    });

    return catalog;
  }

  private normalizeCourseKey(value: string): string {
    return value
      .toLowerCase()
      .replace(/^https?:\/\/(www\.)?nexpertsolutions\.com/i, 'https://www.nexpertsolutions.com')
      .replace('/index.php', '')
      .replace(/\/$/, '')
      .trim();
  }
}
