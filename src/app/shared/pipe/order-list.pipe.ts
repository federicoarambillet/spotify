import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): TrackModel[] {
    if (args === null) {
      return value;
    } else {
      // Sort the array of objects based on the specified property
      const tmpList = value.sort((a, b) => {
        if (a[args] < b[args]) {
          return -1; // If a[args] is less than b[args], return -1
        } else if (a[args] === b[args]) {
          return 0; // If a[args] equals b[args], return 0
        } else if (a[args] > b[args]) {
          return 1; // If a[args] is greater than b[args], return 1
        }
        return 1; // Default return value, though it's unreachable because of preceding conditions
      });

      // If sort is 'asc', return the sorted list, otherwise, return the reversed sorted list
      return (sort === 'asc') ? tmpList : tmpList.reverse();
    }
  }
}
