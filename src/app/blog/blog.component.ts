import { Component } from '@angular/core';
import { BlogPostInterface } from '../models/BlogPost.interface';
import { BlogApiService } from '../services/blog-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'site-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogPosts$: Observable<Array<BlogPostInterface>>;

  constructor(
    private blogApiService: BlogApiService,
  ) {
    this.blogPosts$ = this.blogApiService.getAllPosts();
  }
}
