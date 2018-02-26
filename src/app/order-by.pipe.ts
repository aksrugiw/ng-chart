import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any, key: string, direction: boolean): any {
    return array.sort((a, b) => {
      var x = a[key];
      var y = b[key];

      if (typeof x == "string")
      {
          x = x.toString().toLowerCase(); 
      }
      if (typeof y == "string")
      {
          y = y.toString().toLowerCase();
      }

      if(direction) {
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      }
      else {
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      }
    });
  }

}
