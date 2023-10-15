import { Component } from '@angular/core';
import { User } from '../user.class';
import { SystemService } from '../../system/system.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  pageTitle = "Login";
  user: User = new User();
  message: string = "";

  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private router: Router
  ) {}

  login(): void {
    this.message = ""
    this.sys.loggedInUser = "Login";
    this.usrsvc.login(this.user.username, this.user.password).subscribe({
      next: (res) => {
        console.debug("Login:", res);
        this.sys.loggedInUser = res;
        this.router.navigateByUrl("/user/lst");
      },
      error: (err) => {
        if(err.status === 404) {
          this.message = "Not found!";
        } else {
          console.error(err);
        }
      }
    });
  }

  ngOnInit(): void {

  }
}
