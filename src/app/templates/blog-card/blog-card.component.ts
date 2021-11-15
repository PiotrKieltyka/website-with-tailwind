import { Component, Inject, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BlogApiService } from '../../services/blog-api.service';
import { BlogPostInterface } from '../../models/BlogPost.interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import * as moment from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'site-blog-card',
  template: `
    <ng-container>
      <div class='w-full h-full flex flex-col items-center justify-center text-center'>
        <h3 class='font-medium text-gray-700'>{{title}}</h3>
        <h5 class='text-xs font-light my-4 italic'>{{date}}</h5>
        <span class='font-normal max-w-4xl' [innerHTML]='content'></span>
        <ng-template [ngIf]='link'>
          <a
            class='text-sm font-light w-3/4 md:w-1/4 h-8 my-4 mt-4 grid items-center justify-center bg-white hover:shadow-lg hover:bg-gray-700 hover:text-white transition-all shadow-inner rounded-lg'
            href='{{link}}'
          >Learn more</a>
        </ng-template>
        <ng-template [ngIf]='isLoggedIn'>
          <button
            class='text-xs cursor-pointer px-4 py-1 text-red-400 rounded hover:bg-red-400 hover:text-white hover:shadow-md transition-all'
            (click)='openEditPostDialog(id)'>edit
          </button>
        </ng-template>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class BlogCardComponent {
  isLoggedIn: boolean = false;

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() link?: string = '';
  @Input() content: string = '';

  constructor(
    private authService: AuthService,
    private blogApiService: BlogApiService,
    public dialog: MatDialog,
  ) {
    this.authService.isLoggedIn.subscribe(
      (isLogged) => {
        this.isLoggedIn = isLogged;
      },
    );
  }

  openEditPostDialog(id: string): void {
    this.blogApiService.getPostById(id).subscribe((result: BlogPostInterface) => {
      result.date = moment(result.date).format();
      const dialogRef = this.dialog.open(BlogPostDialog, {
        width: '500px',
        autoFocus: true,
        data: { ...result },
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          result.date = moment(result.date).format('MMMM D, YYYY');
          this.blogApiService.updatePostById(id, result).subscribe(
            (data) => data,
            (err) => this.blogApiService.handleError(err),
          );
        }
      });
    });
  }

}

@Component({
  providers: [{
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    provide: DateAdapter,
    useClass: MomentDateAdapter,
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: MY_FORMATS,
  },
  ],
  selector: 'site-blogpost-dialog',
  template: `
    <div class='container h-full w-full text-center'>
      <h2 class='text-sm font-light mb-4'>Blog Post Editor</h2>
      <div class='w-full flex flex-col items-center'>
        <div class='w-full mt-4 space-y-2 flex flex-col items-center'>
          <label class='text-xs font-light text-gray-500' for='title'>Title</label>
          <input
            class='w-full focus:outline-none ring-white focus:ring-2 focus:ring-gray-700 p-2 rounded-xl bg-gray-100 border-none font-light text-gray-600'
            [(ngModel)]='data.title' #title>
          <label class='text-xs font-light text-gray-500' for='date'>Date</label>
          <mat-form-field>
            <input matInput [matDatepicker]='dp' disabled [(ngModel)]='data.date' #date>
            <mat-datepicker-toggle matSuffix [for]='dp'></mat-datepicker-toggle>
            <mat-datepicker #dp disabled='false'></mat-datepicker>
          </mat-form-field>
          <label class='text-xs font-light text-gray-500' for='link'>Link URL</label>
          <input
            class='w-full focus:outline-none ring-white focus:ring-2 focus:ring-gray-700 p-2 rounded-xl bg-gray-100 border-none font-light text-gray-600'
            [(ngModel)]='data.link' #link>
          <label class='text-xs font-light text-gray-500' for='content'>Content</label>
          <input
            class='w-full focus:outline-none ring-white focus:ring-2 focus:ring-gray-700 p-2 rounded-xl bg-gray-100 border-none font-light text-gray-600'
            [(ngModel)]='data.content' #content>
        </div>
        <div class='w-full flex flex-row justify-evenly text-xs font-light mt-8'>
          <button class='text-green-400 p-2' (click)='onNoClick()'>dismiss</button>
          <button class='text-red-400 p-2' [mat-dialog-close]='data'>save</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class BlogPostDialog {
  constructor(
    public dialogRef: MatDialogRef<BlogPostDialog>,
    @Inject(MAT_DIALOG_DATA) public data: BlogPostInterface,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
