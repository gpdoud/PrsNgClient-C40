import { Component, Input } from '@angular/core';
import { Menu } from '../menu/menu.class';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent {

  @Input() menu!: Menu;
  
}
