import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BlogApiService } from '../../services/blog-api.service';
import { BlogPostInterface } from '../../models/BlogPost.interface';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { BlogPostDialogComponent } from '../../blog/blog-post-dialog.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'site-blog-card',
  template: `
    <ng-container>
      <div
        class="w-full h-full flex flex-col items-center justify-center text-center"
      >
        <h3 class="font-medium text-slate-700">{{ title }}</h3>
        <h5 class="text-xs font-light my-4 italic">{{ date }}</h5>
        <ng-template [ngIf]="isLoggedIn$ | async">
          <div class='flex flex-row gap-2 py-2 mb-4'>
            <button
              class="text-xs cursor-pointer w-16 py-1 text-red-400 rounded border border-red-400 hover:bg-red-400 hover:text-white hover:shadow-md transition-all"
              (click)="openEditPostDialog(id)"
            >
              edit
            </button>
            <button
              class="text-xs cursor-pointer w-16 py-1 text-red-400 rounded border border-red-400 hover:bg-red-400 hover:text-white hover:shadow-md transition-all"
              (click)='deleteBlogPost(id)'
            >
              delete
            </button>
          </div>
        </ng-template>
        <span class="font-normal max-w-4xl mb-2" [innerHTML]="content"></span>
        <ng-template [ngIf]="link">
          <site-link-follow-copy url='{{link}}' class='w-full h-8 flex items-center justify-center'></site-link-follow-copy>
        </ng-template>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class BlogCardComponent {
  @Input() isLoggedIn$: Observable<boolean>;
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() link?: string = '';
  @Input() content: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private blogApiService: BlogApiService,
    public dialog: MatDialog,
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  openEditPostDialog(id: string): void {
    this.blogApiService
      .getPostById(id)
      .subscribe((result: BlogPostInterface) => {
        result.date = moment(result.date).format();
        const dialogRef = this.dialog.open(BlogPostDialogComponent, {
          minWidth: '50vw',
          maxWidth: '75vw',
          autoFocus: true,
          data: { ...result },
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            result.date = moment(result.date).format('MMMM D, YYYY');
            this.blogApiService.updatePostById(id, result).subscribe(
              (data) => {
                // console.log(data);
                this.reload();
              },
              (err) => {
                this.blogApiService.handleError(err);
                this.reload();
              },
            );
          }
        });
      });
  }

  deleteBlogPost(id: string): void {
    this.blogApiService
      .deletePostById(id)
      .subscribe(
        (data) => {
          // console.log(data);
          this.reload();
        },
        (err) => {
          this.blogApiService.handleError(err);
          this.reload();
        },
      )
  }

  async reload(): Promise<boolean> {
    await this.router.navigateByUrl('.', { skipLocationChange: true });
    return this.router.navigateByUrl('blog');
  }
}
