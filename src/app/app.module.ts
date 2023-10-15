import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInitService } from './app-init.service';
import * as ec from './export-component';
import { UserSearchPipe } from './prs/user/user-search.pipe';


const startupServiceFactory = (appinit: AppInitService) => {
  return () => appinit.getSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    ec.HomeComponent,ec.AboutComponent,ec.E404Component,ec.HeaderComponent,ec.FooterComponent, 
    ec.MenuComponent, ec.MenuitemComponent, ec.SortPipe, 
    ec.UserListComponent, ec.UserDetailComponent, ec.UserCreateComponent, ec.UserChangeComponent, ec.UserLoginComponent, UserSearchPipe
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
