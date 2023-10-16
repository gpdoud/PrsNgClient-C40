import { Component } from '@angular/core';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent {

  pageTitle = "Request Listing";
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
  reqs: Request[] = [];
  
  constructor(
    private sys: SystemService,
    private reqsvc: RequestService
  ) {}

  ngOnInit(): void {
    this.sys.chkLogin();
    let userId: number = 0;
    if(this.sys.loggedInUser !== null) {
      userId = this.sys.loggedInUser.id;
    }
    this.reqsvc.reviews(userId).subscribe({
      next: (res) => {
        console.debug("Requests:", res);
        this.reqs = res;
      },
      error: (err) => console.error(err)
    });
  }

}
