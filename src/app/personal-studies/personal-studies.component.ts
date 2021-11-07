import { Component } from '@angular/core';
import { Study } from '../models/Study.interface';
import { StudiesModel } from '../models/Studies.model';

@Component({
  selector: 'site-personal-studies',
  templateUrl: './personal-studies.component.html',
  styleUrls: ['./personal-studies.component.scss'],
})
export class PersonalStudiesComponent {
  studies: Array<Study> = StudiesModel;
}
