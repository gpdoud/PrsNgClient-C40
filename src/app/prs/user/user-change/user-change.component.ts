import { Component } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.css']
})
export class UserChangeComponent {

  pageTitle = "User Change";
  user: User = new User();

  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.usrsvc.change(this.user).subscribe({
      next: (res) => {
        console.debug("Changed...");
        this.router.navigateByUrl("/user/lst");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.usrsvc.get(id).subscribe({
      next: (res) => {
        console.debug("User:", res);
        this.user = res;
      },
      error: (err) => console.error(err)
    });
  }
}
