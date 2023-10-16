import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppInitService } from 'src/app/app-init.service';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  get config() { return this.init.config; }
  get baseurl() { return this.config.baseurl; };
  loggedInUser: any = null;
  
  constructor(
    private init: AppInitService,
    private router: Router
  ) {}

  chkLogin(): void {
    if(this.loggedInUser === null) {
      this.router.navigateByUrl("/login");
    }
  }

}
