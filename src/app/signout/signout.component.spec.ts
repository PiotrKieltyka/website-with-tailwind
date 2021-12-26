import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoutComponent } from './signout.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignoutComponent', () => {
  let component: SignoutComponent;
  let fixture: ComponentFixture<SignoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignoutComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
