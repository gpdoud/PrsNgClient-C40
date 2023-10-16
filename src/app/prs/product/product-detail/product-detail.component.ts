import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  pageTitle = "Product Detail";
  prod: Product = new Product();
  
  constructor(
    private sys: SystemService,
    private prdsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  showVerifyDelete: boolean = false;
  toggle(): void {
    this.showVerifyDelete  = !this.showVerifyDelete;
  }

  remove(): void {
    this.prdsvc.remove(this.prod.id).subscribe({
      next: (res) => {
        console.debug("Deleted...");
        this.router.navigateByUrl("/prod/lst");
      },
      error: (err) => console.debug(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin()
    let id = +this.route.snapshot.params["id"];
    this.prdsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product:", res);
        this.prod = res;
      },
      error: (err) => console.debug(err)
    });
  }

}
