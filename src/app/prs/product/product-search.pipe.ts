import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(prods: Product[], searchCriteria: string = ""): Product[] {
    if(typeof prods === "undefined" || typeof prods === null) return prods;
    searchCriteria = searchCriteria.toLowerCase();
    let selected: Product[] = [];
    for(let prod of prods) {
      if(
        prod.id.toString().toLowerCase().includes(searchCriteria)
        || prod.partNbr.toLowerCase().includes(searchCriteria)
        || prod.name.toLowerCase().includes(searchCriteria)
        || prod.price.toString().toLowerCase().includes(searchCriteria)
        || prod.unit.toLowerCase().includes(searchCriteria)
        || (prod.photoPath !== null && prod.photoPath.toLowerCase().includes(searchCriteria))
      ) {
        selected.push(prod);
      }
    }
    return selected;
  }
}
