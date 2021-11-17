import { Component } from '@angular/core';
import { BlogPostInterface } from '../models/BlogPost.interface';
import { BlogApiService } from '../services/blog-api.service';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { BlogPostDialogComponent } from './blog-post-dialog.component';
import * as moment from 'moment';

@Component({
  selector: 'site-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogPosts$: Observable<Array<BlogPostInterface>>;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private blogApiService: BlogApiService,
    public authService: AuthService,
    public dialog: MatDialog,
  ) {
    this.blogPosts$ = this.blogApiService.getAllPosts();
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  openAddPostDialog(): void {
    const dialogRef = this.dialog.open(BlogPostDialogComponent, {
      minWidth: '50vw',
      maxWidth: '75vw',
      autoFocus: true,
      data: { date: moment(moment.now()).format('YYYY-M-D') },
    });
    dialogRef.afterClosed().subscribe((result: BlogPostInterface) => {
      if (result) {
        result.date = moment(result.date).format('MMMM D, YYYY');
        this.blogApiService.addPost(result).subscribe(
          (data) => data,
          (err) => this.blogApiService.handleError(err),
        );
      }
    });
  }
}
