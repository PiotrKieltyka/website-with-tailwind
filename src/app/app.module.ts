import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404PageComponent } from './error/error-404-page.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectTagsComponent } from './templates/project-tags/project-tags.component';
import { ProjectCardComponent } from './templates/project-card/project-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavMenuComponent } from './templates/nav-menu/nav-menu.component';
import { BlogCardComponent } from './templates/blog-card/blog-card.component';
import { BlogComponent } from './blog/blog.component';
import { WhoamiComponent } from './whoami/whoami.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { PersonalStudiesComponent } from './personal-studies/personal-studies.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { FooterComponent } from './footer/footer.component';
import { BLOG_API_TOKEN } from './services/blog-api.token';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignoutComponent } from './signout/signout.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './templates/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404PageComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectTagsComponent,
    ProjectCardComponent,
    NavBarComponent,
    NavMenuComponent,
    BlogCardComponent,
    BlogComponent,
    WhoamiComponent,
    TechnicalSkillsComponent,
    PersonalStudiesComponent,
    JumboComponent,
    FooterComponent,
    SigninComponent,
    SignoutComponent,
    UserinfoComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    {
      provide: BLOG_API_TOKEN,
      useValue: 'https://node.piotrkieltyka.website/api/',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
