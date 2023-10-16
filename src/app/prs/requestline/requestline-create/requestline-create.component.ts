import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent {
  pageTitle = "Requestline Create";
  reql: Requestline = new Requestline();
  prods: Product[] = [];
  
  constructor(
    private sys: SystemService,
    private reqlsvc: RequestlineService,
    private prdsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    console.debug("B4:", this.reql)
    this.reqlsvc.create(this.reql).subscribe({
      next: (res) => {
        console.debug("Created...");
        this.router.navigateByUrl(`/req/lns/${this.reql.requestId}`);
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.reql.requestId = +this.route.snapshot.params["rid"];
    this.prdsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.prods = res;
      }
    });
  }
}
