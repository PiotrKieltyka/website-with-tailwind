import { Component, Input } from '@angular/core';

@Component({
  selector: 'site-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() index: number = 0;
  @Input() title: string = '';
  @Input() leadText: string = '';
  @Input() projectURL?: string = '';
  @Input() buttonIcon?: string = '';
  @Input() buttonText?: string = '';
}
