import { Component } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  pageTitle = "User Listing";
  searchCriteria: string = "";
  sortColumn: string = "id";
  sortAsc: boolean = true;
  sortFn(column: string) {
    if(column === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }
  users: User[] = [];
  
  constructor(
    private sys: SystemService,
    private usrsvc: UserService
  ) {}

  ngOnInit(): void {
    this.sys.chkLogin()
    this.usrsvc.list().subscribe({
      next: (res) => {
        console.debug("Users:", res);
        this.users = res;
      },
      error: (err) => console.error(err)
    });
  }
}
