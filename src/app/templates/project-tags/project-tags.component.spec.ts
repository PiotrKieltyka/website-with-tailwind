import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTagsComponent } from './project-tags.component';

describe('TagsComponent', () => {
  let component: ProjectTagsComponent;
  let fixture: ComponentFixture<ProjectTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create project tags component', () => {
    expect(component).toBeTruthy();
  });

  it('should render container with tag', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rendered = compiled.querySelector('span');
    console.log(rendered)
    expect(rendered?.classList).toContain('text-xs');
    expect(rendered?.classList).toContain('font-light');
  });
});
