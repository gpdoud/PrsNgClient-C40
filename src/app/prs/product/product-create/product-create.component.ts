import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  pageTitle = "Product Create";
  prod: Product = new Product();
  vends: Vendor[] = [];
  
  constructor(
    private sys: SystemService,
    private prdsvc: ProductService,
    private vndsvc: VendorService,
    private router: Router
  ) {}

  save(): void {
    this.prdsvc.create(this.prod).subscribe({
      next: (res) => {
        console.debug("Created...");
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
  }

}
