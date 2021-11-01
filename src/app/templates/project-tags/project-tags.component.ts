import { Component, Input } from '@angular/core';

@Component({
  selector: 'site-project-tags',
  template: `<ng-container
    *ngFor='let tag of tags'
    class='w-full h-full'
  >
    <span class='text-xs font-light text-shadow-sm'>{{tag}}</span>
  </ng-container>`,
  styleUrls: ['project-tags.component.scss']
})
export class ProjectTagsComponent {
  @Input() tags: Array<string> = [];
}
