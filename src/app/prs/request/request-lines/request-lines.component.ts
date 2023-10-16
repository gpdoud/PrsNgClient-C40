import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { Requestline } from '../../requestline/requestline.class';
import { RequestlineService } from '../../requestline/requestline.service';

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
    private reqlsvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  review(): void {
    this.reqsvc.review(this.req).subscribe({
      next: (res) => {
        console.debug("Reviewed...");
        this.refresh();
      }
    });
  }

  showVerifyDelete: boolean = false;
  toggle(): void {
    this.showVerifyDelete  = !this.showVerifyDelete;
  }

  saveReqId: number = 0;

  change(id: number): void {
    this.router.navigateByUrl(`/reql/chg/${id}`)
  }
  remove(id: number): void {
    this.saveReqId = id;
    this.showVerifyDelete = !this.showVerifyDelete;
  }
  verifyRemove(id: number): void {
    this.reqlsvc.remove(id).subscribe({
      next: (res) => {
        console.debug("Removed...");
        this.refresh();
      },
      error: (err) => console.debug(err)      
    });
  }

  refresh(): void {
    this.sys.chkLogin();
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
    this.refresh();
  }

}
