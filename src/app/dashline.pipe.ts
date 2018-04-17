import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashline'
})
export class DashlinePipe implements PipeTransform {

  transform(value: any, args?: any): any {

  if (value === '') {
    return '-';
  }else {
    return value ;
  }
  }

}
