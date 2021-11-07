import { Component } from '@angular/core';
import { BlogPostInterface } from '../models/BlogPost.interface';
import { BlogPostsModel } from '../models/BlogPosts.model';

@Component({
  selector: 'site-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogPosts: Array<BlogPostInterface> = BlogPostsModel;
}
