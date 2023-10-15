import { Injectable } from '@angular/core';
import { AppInitService } from 'src/app/app-init.service';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  get config() { return this.init.config; }
  get baseurl() { return this.config.baseurl; };
  loggedInUser: any = "Login";
  
  constructor(
    private init: AppInitService
    ) {}

}
