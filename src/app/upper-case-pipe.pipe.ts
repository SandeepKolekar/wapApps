import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCasePipe'
})
export class UpperCasePipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let nwVal = '';
      nwVal =  value;
      nwVal =  nwVal.toUpperCase();
    return nwVal;
  }
}
