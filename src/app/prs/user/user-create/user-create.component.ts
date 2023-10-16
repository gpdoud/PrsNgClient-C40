import { Component } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { UserSearchPipe } from '../user-search.pipe';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.class';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  pageTitle = "User Create";
  user: User = new User();
  
  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private router: Router
  ) {}

  save(): void {
    this.usrsvc.create(this.user).subscribe({
      next: (res) => {
        console.debug("Created...");
        this.router.navigateByUrl("/user/lst");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin()

  }
}
