import { Component, Inject } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BlogPostInterface } from '../models/BlogPost.interface';

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
export class BlogPostDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BlogPostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BlogPostInterface,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
