import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vends: Vendor[], searchCriteria: string = ""): Vendor[] {
    if(typeof vends === "undefined" || typeof vends === null) return vends;
    searchCriteria = searchCriteria.toLowerCase();
    let selected: Vendor[] = [];
    for(let vend of vends) {
      if(
        vend.id.toString().toLowerCase().includes(searchCriteria)
        || vend.code.toLowerCase().includes(searchCriteria)
        || vend.name.toLowerCase().includes(searchCriteria)
        || vend.address.toLowerCase().includes(searchCriteria)
        || vend.city.toLowerCase().includes(searchCriteria)
        || vend.state.toLowerCase().includes(searchCriteria)
        || vend.zip.toLowerCase().includes(searchCriteria)
        || (vend.phone !== null && vend.phone.toLowerCase().includes(searchCriteria))
        || (vend.email !== null && vend.email.toLowerCase().includes(searchCriteria))
      ) {
        selected.push(vend);
      }
    }
    return selected;
  }

}
