import { Component, Input } from '@angular/core';

@Component({
  selector: 'site-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  @Input() id?: string = '';
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() link?: string = '';
  @Input() content: string = '';
}
