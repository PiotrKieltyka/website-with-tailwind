import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { ProjectsComponent } from '../projects/projects.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { ProjectCardComponent } from '../templates/project-card/project-card.component';
import { ProjectTagsComponent } from '../templates/project-tags/project-tags.component';

const mockActivatedRoute = {
  snapshot: {
    url: [
      { path: 'home' },
    ],
  },
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        JumboComponent,
        ProjectsComponent,
        ProjectCardComponent,
        ProjectTagsComponent,
        FooterComponent,
      ],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
