import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent {

  pageTitle = "Vendor Detail";
  vend: Vendor = new Vendor();
  
  constructor(
    private sys: SystemService,
    private vndsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  showVerifyDelete: boolean = false;
  toggle(): void {
    this.showVerifyDelete  = !this.showVerifyDelete;
  }

  remove(): void {
    this.vndsvc.remove(this.vend.id).subscribe({
      next: (res) => {
        console.debug("Deleted...");
        this.router.navigateByUrl("/vend/lst");
      },
      error: (err) => console.debug(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin()
    let id = +this.route.snapshot.params["id"];
    this.vndsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor:", res);
        this.vend = res;
      },
      error: (err) => console.debug(err)
    });
  }

}
