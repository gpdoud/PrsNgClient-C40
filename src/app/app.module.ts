import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInitService } from './app-init.service';
import * as ec from './export-component';


const startupServiceFactory = (appinit: AppInitService) => {
  return () => appinit.getSettings();
}
 
@NgModule({
  declarations: [
    AppComponent, ec.HeaderComponent, ec.FooterComponent,
    ec.HomeComponent,ec.AboutComponent,ec.E404Component,ec.HeaderComponent,ec.FooterComponent, 
    ec.MenuComponent, ec.MenuitemComponent, ec.SortPipe, ec.BoolPipe, 
    ec.UserListComponent, ec.UserDetailComponent, ec.UserCreateComponent, ec.UserChangeComponent, ec.UserLoginComponent, 
    ec.UserSearchPipe, 
    ec.VendorListComponent, ec.VendorDetailComponent, ec.VendorCreateComponent, ec.VendorChangeComponent, ec.VendorSearchPipe, 
    ec.ProductSearchPipe, ec.ProductListComponent, ec.ProductDetailComponent, ec.ProductCreateComponent, ec.ProductChangeComponent, 
    ec.RequestSearchPipe, ec.RequestListComponent, ec.RequestDetailComponent, ec.RequestCreateComponent, ec.RequestChangeComponent, 
    ec.RequestLinesComponent, ec.RequestReviewComponent, ec.RequestReviewItemComponent, 
    ec.RequestlineCreateComponent, ec.RequestlineChangeComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [
    AppInitService, {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
