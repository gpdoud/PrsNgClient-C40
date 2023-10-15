import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as ec from './export-component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "user/lst",           component: ec.UserListComponent },
  { path: "user/det/:id",       component: ec.UserDetailComponent },
  { path: "user/add",           component: ec.UserCreateComponent },
  { path: "user/chg/:id",       component: ec.UserChangeComponent },
  { path: "login",              component: ec.UserLoginComponent },

  { path: "home", component: ec.HomeComponent },
  { path: "about", component: ec.AboutComponent },

  { path: "**", component: ec.E404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
