import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-change',
  templateUrl: './vendor-change.component.html',
  styleUrls: ['./vendor-change.component.css']
})
export class VendorChangeComponent {

  pageTitle = "Vendor Change";
  vend: Vendor = new Vendor();

  constructor(
    private sys: SystemService,
    private vndsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.vndsvc.change(this.vend).subscribe({
      next: (res) => {
        console.debug("Changed...");
        this.router.navigateByUrl("/vend/lst");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin()
    let id = this.route.snapshot.params["id"];
    this.vndsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor:", res);
        this.vend = res;
      },
      error: (err) => console.error(err)
    });
  }

}
