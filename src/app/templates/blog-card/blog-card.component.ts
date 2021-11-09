import { Component, Input } from '@angular/core';

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
      </div>
    </ng-container>
  `,
  styles: [],
})
export class BlogCardComponent {
  @Input() id?: string = '';
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() link?: string = '';
  @Input() content: string = '';
}
