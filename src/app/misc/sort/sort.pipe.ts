import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(arr: any[], col: string, asc: boolean): any[] {
    const sortFn = (a: any, b: any) => {
      if (typeof arr === 'undefined' || typeof arr === null) return arr;
      let x = '';
      if (a[col] !== null)
        x = typeof a[col] === 'number' ? a[col] : a[col].toString().toLowerCase();
      let y = '';
      if (b[col] !== null)
        y = typeof b[col] === 'number' ? b[col] : b[col].toString().toLowerCase();
      
      if(x === y) return 0;
      if(asc) {
        return (x > y) ? 1 : -1;
      } else {
        return (x > y) ? -1 : 1;
      }
    };

    return arr.sort();
  }
}
