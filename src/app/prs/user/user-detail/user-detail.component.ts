import { Component } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { UserService } from '../user.service';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { User } from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  pageTitle = "User Detail";
  user: User = new User();
  
  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  showVerifyDelete: boolean = false;
  toggle(): void {
    this.showVerifyDelete  = !this.showVerifyDelete;
  }

  remove(): void {
    this.usrsvc.remove(this.user.id).subscribe({
      next: (res) => {
        console.debug("Deleted...");
        this.router.navigateByUrl("/user/lst");
      },
      error: (err) => console.debug(err)
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.usrsvc.get(id).subscribe({
      next: (res) => {
        console.debug("User:", res);
        this.user = res;
      },
      error: (err) => console.debug(err)
    });
  }
}
