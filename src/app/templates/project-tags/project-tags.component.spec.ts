import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTagsComponent } from './project-tags.component';

const expectedTags = ['Angular', 'TypeScript', 'TailwindCSS', 'RWD'];

describe('TagsComponent', () => {
  let component: ProjectTagsComponent;
  let fixture: ComponentFixture<ProjectTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTagsComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTagsComponent);
    component = fixture.componentInstance;
    component.tags = expectedTags;
    fixture.detectChanges();
  });

  it('should create project tags component', () => {
    expect(component).toBeTruthy();
  });

  it('should render 4 spans with expected classes and tags', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rendered = compiled.querySelectorAll('span');

    expect(rendered?.length).toBe(expectedTags.length);

    expect(rendered?.item(0)?.classList.contains('text-xs')).toBeTrue();
    expect(rendered?.item(1)?.classList.contains('font-light')).toBeTrue();
    expect(rendered?.item(2)?.classList.contains('text-shadow-sm')).toBeTrue();

    expect(rendered?.item(0)?.textContent).toBe('Angular');
    expect(rendered?.item(1)?.textContent).toBe('TypeScript');
    expect(rendered?.item(2)?.textContent).toBe('TailwindCSS');
    expect(rendered?.item(3)?.textContent).toBe('RWD');
  });
});
