import { Component } from '@angular/core';
import { BlogPostInterface } from '../models/BlogPost.interface';
import { BlogApiService } from '../services/blog-api.service';
import { Observable, of, Subject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { BlogPostDialogComponent } from './blog-post-dialog.component';
import * as moment from 'moment';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'site-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogPosts$: Observable<Array<BlogPostInterface>>;
  isLoggedIn$: Observable<boolean>;
  loadingError$ = new Subject<boolean>();

  constructor(
    private router: Router,
    private blogApiService: BlogApiService,
    public authService: AuthService,
    public dialog: MatDialog,
  ) {
    this.blogPosts$ = this.blogApiService.getAllPosts().pipe(
      catchError(() => {
        this.loadingError$.next(true);
        return of([]);
      })
    );
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
          (data) => {
            // console.log(data);
            this.reload();
          },
          (err) => {
            this.blogApiService.handleError(err);
          },
        );
      }
    });
  }

  async reload(): Promise<boolean> {
    await this.router.navigateByUrl('.', { skipLocationChange: true });
    return this.router.navigateByUrl('blog');
  }
}
