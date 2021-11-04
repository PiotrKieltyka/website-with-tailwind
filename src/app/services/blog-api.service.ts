import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BLOG_API_TOKEN } from './blog-api.token';
import { BlogPostInterface } from '../models/BlogPost.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {

  constructor(
    private http: HttpClient,
    @Inject(BLOG_API_TOKEN) private API_URL: string
  ) { }

  getAllPosts(): Observable<Array<BlogPostInterface>> {
    return this.http.get(this.API_URL + 'posts/') as Observable<Array<BlogPostInterface>>;
  }

  getPostById(id: string): Observable<BlogPostInterface> {
    return this.http.get(
      this.API_URL + 'post/' + id,
    ) as Observable<BlogPostInterface>;
  }

  addPost(post: BlogPostInterface): Observable<any> {
    return this.http.post(
      this.API_URL + 'post/add',
      JSON.stringify(post),
      this.addHeaders(),
    );
  }

  updatePostById(id: string, post: BlogPostInterface): Observable<any> {
    return this.http.post(
      this.API_URL + 'post/update/' + id,
      JSON.stringify(post),
      this.addHeaders(),
    );
  }

  addHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return { headers }
  }
}
