import { Component } from '@angular/core';
import { ProjectInterface } from '../models/Project.interface';
import { ProjectsModel } from '../models/Projects.model';

@Component({
  selector: 'site-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public projects: Array<ProjectInterface> = ProjectsModel;
}
