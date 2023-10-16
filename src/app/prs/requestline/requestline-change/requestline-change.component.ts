import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';

@Component({
  selector: 'app-requestline-change',
  templateUrl: './requestline-change.component.html',
  styleUrls: ['./requestline-change.component.css']
})
export class RequestlineChangeComponent {
  pageTitle = "Requestline Change";
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
    this.reqlsvc.change(this.reql).subscribe({
      next: (res) => {
        console.debug("Changed...");
        this.router.navigateByUrl(`/req/lns/${this.reql.requestId}`);
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin()
    this.prdsvc.list().subscribe({
      next: (res) => {
        console.debug("Requestlines:", res);
        this.prods = res;
      },
      error: (err) => console.error(err)
    });
    let id = this.route.snapshot.params["id"];
    this.reqlsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Requestline:", res);
        this.reql = res;
      },
      error: (err) => console.error(err)
    });
  }

}
