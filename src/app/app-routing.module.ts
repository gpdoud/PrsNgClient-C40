import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as ec from './export-component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "home", component: ec.HomeComponent },
  { path: "about", component: ec.AboutComponent },

  { path: "**", component: ec.E404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
