import { Component } from '@angular/core';
import { Request } from'../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from '../../requestline/requestline.class';
import { SystemService } from '../../system/system.service';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent {

  pageTitle = "Request Review Item";
  req: Request = new Request();
  
  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  approve(): void {
    this.reqsvc.approve(this.req).subscribe({
      next: (res) => {
        console.debug("Approved...");
        this.refresh();
      },
      error: (err) => console.debug(err)
    });
  }
  reject(): void {
    this.reqsvc.reject(this.req).subscribe({
      next: (res) => {
        console.debug("Rejected...");
        this.refresh();
      },
      error: (err) => console.debug(err)
    });
  }

  refresh(): void {
    //this.sys.chkLogin();
    let id = +this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.req = res;
      },
      error: (err) => console.debug(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin()
    this.refresh();
  }
}
