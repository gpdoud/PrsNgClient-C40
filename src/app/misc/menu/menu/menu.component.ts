import { Component } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menus: Menu[] = [
    new Menu("PRS", "/home"),
    new Menu("Requests", "/req/list"),
    new Menu("Products", "/prod/list"),
    new Menu("Vendors", "/vend/list"),
    new Menu("Users", "/vend/list"),
    new Menu("Login", "/login")
  ];
}
