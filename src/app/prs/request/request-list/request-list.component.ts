import { Component } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {

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
    this.reqsvc.list().subscribe({
      next: (res) => {
        console.debug("Requests:", res);
        this.reqs = res;
      },
      error: (err) => console.error(err)
    });
  }

}
