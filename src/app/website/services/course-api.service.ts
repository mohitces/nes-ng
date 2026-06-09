import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, catchError } from 'rxjs';
import { Course, formatPrice } from '../data/courses.data';

interface ApiCourse {
  _id?: string;
  title: string;
  slug?: string;
  provider?: string;
  description?: string;
  hours?: number;
  training_mode?: string;
  reviews?: number;
  rating?: number;
  image?: string;
  buy_url?: string;
  status?: 'Published' | 'Draft' | 'Archived';
  price?: {
    discounted?: string;
    original?: string;
    discount_percent?: number;
  };
  language?: string;
  prerequisite?: string;
  modules?: string[];
  page_sections?: Course['page_sections'];
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  count?: number;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export class CourseApiService {
  private apiUrl = 'http://localhost:5000/api/courses';
  private fallbackImage = 'assets/images/course image/CCIE devnet.png';

  constructor(private http: HttpClient) {}

  getLiveCourses(): Observable<Course[]> {
    return this.http.get<ApiResponse<ApiCourse[]>>(this.apiUrl).pipe(
      map((response) => (response.data || [])
        .filter((course) => !course.status || course.status === 'Published')
        .map((course, index) => this.toWebsiteCourse(course, index))
      ),
      catchError(() => of([]))
    );
  }

  getLiveCourse(slug: string): Observable<Course | undefined> {
    return this.getLiveCourses().pipe(
      map((courses) => courses.find((course) => this.toSlug(course.title) === slug || this.toSlug(course.url) === slug))
    );
  }

  private toWebsiteCourse(course: ApiCourse, index: number): Course {
    const modules = course.modules?.length ? course.modules : course.page_sections?.major_topics || ['Overview', 'Labs', 'Certification Guidance'];

    return {
      index: index + 1,
      title: course.title,
      image: course.image || course.page_sections?.banner_image || this.fallbackImage,
      url: `/course/${course.slug || this.toSlug(course.title)}`,
      modules,
      valid_till: '30-06-2026',
      reviews: course.reviews || 0,
      hours: course.hours || 0,
      buy_url: course.buy_url || 'https://wa.me/919582801239',
      price: {
        discounted: formatPrice(course.price?.discounted || 'Price on request'),
        original: formatPrice(course.price?.original || 'Price on request'),
        discount_percent: course.price?.discount_percent || 0
      },
      source_summary: course.description || course.page_sections?.overview?.[0] || `${course.title} training course from NES.`,
      training_mode: course.training_mode || 'Online/Classroom',
      language: course.language || 'English | Hindi',
      prerequisite: course.prerequisite || 'As per NES live page',
      page_sections: course.page_sections
    };
  }

  private toSlug(value: string): string {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
}
