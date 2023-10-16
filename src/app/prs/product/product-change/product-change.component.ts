import { Component } from '@angular/core';
import { VendorService } from '../../vendor/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from '../../vendor/vendor.class';

@Component({
  selector: 'app-product-change',
  templateUrl: './product-change.component.html',
  styleUrls: ['./product-change.component.css']
})
export class ProductChangeComponent {

  pageTitle = "Product Change";
  prod: Product = new Product();
  vends: Vendor[] = [];

  constructor(
    private sys: SystemService,
    private prdsvc: ProductService,
    private vndsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.prdsvc.change(this.prod).subscribe({
      next: (res) => {
        console.debug("Changed...");
        this.router.navigateByUrl("/prod/lst");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin()
    this.vndsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vends = res;
      },
      error: (err) => console.error(err)
    });
    let id = this.route.snapshot.params["id"];
    this.prdsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product:", res);
        this.prod = res;
      },
      error: (err) => console.error(err)
    });
  }
}
