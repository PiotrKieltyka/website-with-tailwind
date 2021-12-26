import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoamiComponent } from './whoami.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { PersonalStudiesComponent } from './personal-studies/personal-studies.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

const mockActivatedRoute = {
  snapshot: {
    url: [
      { path: 'whoami' },
    ],
  },
};

describe('WhoamiComponent', () => {
  let component: WhoamiComponent;
  let fixture: ComponentFixture<WhoamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WhoamiComponent,
        TechnicalSkillsComponent,
        PersonalStudiesComponent,
        FooterComponent,
      ],
      imports: [RouterTestingModule],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
