import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoComponent } from './userinfo.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { UserCardComponent } from '../templates/user-card/user-card.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('UserinfoComponent', () => {
  let component: UserinfoComponent;
  let fixture: ComponentFixture<UserinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserinfoComponent,
        UserCardComponent,
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule,
        MatDialogModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
