import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardComponent } from './blog-card.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BLOG_API_TOKEN } from '../../services/blog-api.token';
import { MatDialogModule } from '@angular/material/dialog';

describe('BlogCardComponent', () => {
  let component: BlogCardComponent;
  let fixture: ComponentFixture<BlogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogCardComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule,
      ],
      providers: [{
        provide: BLOG_API_TOKEN,
        useValue: 'https://node.piotrkieltyka.website/api/',
      }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
