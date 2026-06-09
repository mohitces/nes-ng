import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:5000/api';

export interface BlogPost {
  _id?: string;
  title: string;
  slug?: string;
  meta_description?: string;
  content: string;
  author?: string;
  tags?: string[];
  image?: string;
  status?: 'Draft' | 'Published';
  updatedAt?: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
}

@Injectable({ providedIn: 'root' })
export class ContentApiService {
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<ApiResponse<BlogPost[]>> {
    return this.http.get<ApiResponse<BlogPost[]>>(`${API_URL}/blogs`, { params: { status: 'Published' } });
  }

  getBlog(slug: string): Observable<ApiResponse<BlogPost>> {
    return this.http.get<ApiResponse<BlogPost>>(`${API_URL}/blogs/${slug}`);
  }

  getSiteContent(type: 'feedback' | 'partners', key: string): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${API_URL}/site-content`, {
      params: { type, key, status: 'Published' }
    });
  }
}
