import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './error/error-404-page.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { WhoamiComponent } from './whoami/whoami.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { AuthGuard } from './services/auth.guard';

const siteRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'HomeComp' } },
  { path: 'blog', component: BlogComponent, data: { animation: 'BlogComp' } },
  {
    path: 'whoami',
    component: WhoamiComponent,
    data: { animation: 'WhoamiComp' },
  },
  {
    path: 'userinfo',
    component: UserinfoComponent,
    canActivate: [AuthGuard],
    data: { animation: 'UserComp' },
  },
  {
    path: 'signin',
    component: SigninComponent,
    data: { animation: 'SignInComp' },
  },
  { path: 'signout', component: SignoutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**',
    component: Error404PageComponent,
    data: { animation: '404Error' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(siteRoutes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
