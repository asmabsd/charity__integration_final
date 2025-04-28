// src/app/services/services/blog.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../models/blog-post.model';
import { BlogPostRequest } from '../models/blog-post-request.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private base = `${environment.apiUrl}/blog-posts`;

  constructor(private http: HttpClient) {}

  /** All published posts */
  getAll(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.base);
  }

  /** The current user’s posts */
  getMine(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.base}/my-posts`);
  }

  getById(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.base}/${id}`);
  }

  create(request: BlogPostRequest): Observable<BlogPost> {
    return this.http.post<BlogPost>(this.base, request);
  }

  update(id: string, request: BlogPostRequest): Observable<BlogPost> {
    return this.http.put<BlogPost>(`${this.base}/${id}`, request);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
