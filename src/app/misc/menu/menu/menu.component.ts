import { Component } from '@angular/core';
import { Menu } from './menu.class';
import { SystemService } from 'src/app/prs/system/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  get loggedInUser() { return this.sys.loggedInUser.username; }

  menus: Menu[] = [
    new Menu("PRS", "/home"),
    new Menu("Requests", "/req/lst"),
    new Menu("Products", "/prod/lst"),
    new Menu("Vendors", "/vend/lst"),
    new Menu("Users", "/user/lst"),
    new Menu("About", "/about"),
    new Menu("Login", "/login")
  ];

  constructor(
    private sys: SystemService
  ) {}
}
