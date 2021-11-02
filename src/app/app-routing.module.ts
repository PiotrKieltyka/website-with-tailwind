import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './error/error-404-page.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { WhoamiComponent } from './whoami/whoami.component';

const siteRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'whoami', component: WhoamiComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Error404PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(siteRoutes, {
    scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
