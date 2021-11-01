import { Component } from '@angular/core';
import { ProjectInterface } from '../models/Project.interface';
import { ProjectsDB } from '../models/Projects.model';

@Component({
  selector: 'site-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  public Projects: Array<ProjectInterface> = ProjectsDB;

}
