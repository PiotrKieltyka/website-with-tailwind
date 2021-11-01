import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './error/error-404-page.component';
import { HomeComponent } from './home/home.component';

const siteRoutes: Routes = [
  { path: 'home', component: HomeComponent },
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
