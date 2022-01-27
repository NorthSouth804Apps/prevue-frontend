import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({name: 'uniqueValuesArrayElementsPipe'})
export class UniqueValuesArrayElementsPipe implements PipeTransform {
  transform(value: any[], property: string, addedValues: string[] = []): string[] {
    if (!value || !value.length) {
      return [];
    }
    return [...addedValues, ...new Set(value.map(item => _.get(item, property)))];
  }
}
