import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({name: 'tsFindBy'})
export class FindPipe implements PipeTransform {
  transform(data: any[], property: string, value: string ): any {

    return data.find(dataItem => _.get(dataItem, property) === value);
  }
}
