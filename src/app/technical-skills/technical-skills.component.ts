import { Component } from '@angular/core';
import { TechnicalSkillsInterface } from '../models/TechnicalSkills.interface';
import { TechnicalSkillsModel } from '../models/TechnicalSkillsModel';

@Component({
  selector: 'site-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss'],
})
export class TechnicalSkillsComponent {
  Object = Object;
  technicalSkills: TechnicalSkillsInterface = TechnicalSkillsModel;
}
