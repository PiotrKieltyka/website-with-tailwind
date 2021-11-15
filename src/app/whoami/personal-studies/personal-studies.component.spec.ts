import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalStudiesComponent } from './personal-studies.component';

describe('PersonalStudiesComponent', () => {
  let component: PersonalStudiesComponent;
  let fixture: ComponentFixture<PersonalStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalStudiesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
