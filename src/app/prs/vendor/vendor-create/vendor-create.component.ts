import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {

  pageTitle = "Vendor Create";
  vend: Vendor = new Vendor();
  
  constructor(
    private sys: SystemService,
    private vndsvc: VendorService,
    private router: Router
  ) {}

  save(): void {
    this.vndsvc.create(this.vend).subscribe({
      next: (res) => {
        console.debug("Created...");
        this.router.navigateByUrl("/vend/lst");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin()

  }

}
