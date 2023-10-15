import { Component } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { VendorService } from '../../vendor/vendor.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  pageTitle = "Product Listing";
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
  prods: Product[] = [];
  
  constructor(
    private sys: SystemService,
    private prdsvc: ProductService
  ) {}

  ngOnInit(): void {
    this.prdsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.prods = res;
      },
      error: (err) => console.error(err)
    });
  }

}
