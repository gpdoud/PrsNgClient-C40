import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(reqs: Request[], searchCriteria: string = ""): Request[] {
    if(typeof reqs === "undefined" || typeof reqs === null) return reqs;
    searchCriteria = searchCriteria.toLowerCase();
    let selected: Request[] = [];
    for(let req of reqs) {
      if(
        req.id.toString().toLowerCase().includes(searchCriteria)
        || req.description.toLowerCase().includes(searchCriteria)
        || req.justification.toLowerCase().includes(searchCriteria)
        || req.rejectionReason.toLowerCase().includes(searchCriteria)
        || req.deliveryMode.toLowerCase().includes(searchCriteria)
        || req.status.toLowerCase().includes(searchCriteria)
        || req.total.toString().toLowerCase().includes(searchCriteria)
      ) {
        selected.push(req);
      }
    }
    return selected;
  }
}
