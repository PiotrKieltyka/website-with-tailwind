import { Component } from '@angular/core';
import { BlogPostInterface } from '../models/BlogPost.interface';
import { BlogApiService } from '../services/blog-api.service';

@Component({
  selector: 'site-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogPosts: Array<BlogPostInterface> = [];

  constructor(
    private blogApiService: BlogApiService,
  ) {
    this.blogApiService.getAllPosts().subscribe(
      (posts: Array<BlogPostInterface>) => {
        this.blogPosts = posts;
      },
    )
  }
}
