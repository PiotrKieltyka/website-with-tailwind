import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BLOG_API_TOKEN } from './blog-api.token';
import { BlogPostInterface } from '../models/BlogPost.interface';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogApiService {
  constructor(
    private http: HttpClient,
    @Inject(BLOG_API_TOKEN) private API_URL: string,
  ) {}

  getAllPosts(): Observable<Array<BlogPostInterface>> {
    return this.http.get(this.API_URL + 'posts/') as Observable<
      Array<BlogPostInterface>
    >;
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
      Authorization: sessionStorage.getItem('user') as string,
    });
    return { headers };
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.message,
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
