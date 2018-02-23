import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, term: string, direction: string): any {
    if(term) {
      return this.sortByKey(value, term, direction);
    }
    else {
      return value;
    }
  }

  sortByKey(array, key, direction) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];

        if (typeof x == "string")
        {
            x = (""+x).toLowerCase(); 
        }
        if (typeof y == "string")
        {
            y = (""+y).toLowerCase();
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
