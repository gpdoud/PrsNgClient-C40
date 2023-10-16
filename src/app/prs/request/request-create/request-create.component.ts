import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {

  pageTitle = "Request Create";
  req: Request = new Request();
  user: User = new User();
  
  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private router: Router
  ) {}

  save(): void {
    console.debug("B4:", this.req)
    this.reqsvc.create(this.req).subscribe({
      next: (res) => {
        console.debug("Created...");
        this.router.navigateByUrl("/req/lst");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    console.warn("chkLogin()");
    this.sys.chkLogin();
    if(this.sys.loggedInUser !== null) {
      this.req.userId = this.sys.loggedInUser.id;
      this.user = this.sys.loggedInUser;
    }
  }
}
