import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const siteRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(siteRoutes, {
    scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
