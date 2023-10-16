import { Component } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {

  pageTitle = "Vendor Listing";
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
  vends: Vendor[] = [];
  
  constructor(
    private sys: SystemService,
    private vndsvc: VendorService
  ) {}

  ngOnInit(): void {
    this.sys.chkLogin()
    this.vndsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vends = res;
      },
      error: (err) => console.error(err)
    });
  }


}
