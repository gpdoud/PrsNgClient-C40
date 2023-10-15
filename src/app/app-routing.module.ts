import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as ec from './export-component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "prod/lst",           component: ec.ProductListComponent },
  { path: "prod/det/:id",       component: ec.ProductDetailComponent },
  { path: "prod/add",           component: ec.ProductCreateComponent },
  { path: "prod/chg/:id",       component: ec.ProductChangeComponent },

  { path: "user/lst",           component: ec.UserListComponent },
  { path: "user/det/:id",       component: ec.UserDetailComponent },
  { path: "user/add",           component: ec.UserCreateComponent },
  { path: "user/chg/:id",       component: ec.UserChangeComponent },
  { path: "login",              component: ec.UserLoginComponent },

  { path: "vend/lst",           component: ec.VendorListComponent },
  { path: "vend/det/:id",       component: ec.VendorDetailComponent },
  { path: "vend/add",           component: ec.VendorCreateComponent },
  { path: "vend/chg/:id",       component: ec.VendorChangeComponent },

  { path: "home", component: ec.HomeComponent },
  { path: "about", component: ec.AboutComponent },

  { path: "**", component: ec.E404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
