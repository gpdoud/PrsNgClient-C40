import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { Requestline } from '../../requestline/requestline.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent {

  pageTitle = "Request Lines";
  req: Request = new Request();
  
  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  showVerifyDelete: boolean = false;
  toggle(): void {
    this.showVerifyDelete  = !this.showVerifyDelete;
  }

  change(id: number): void {

  }
  remove(reql: Requestline): void {
  }
  verifyRemove(reql: Requestline): void {
  }

  ngOnInit(): void {
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

}
