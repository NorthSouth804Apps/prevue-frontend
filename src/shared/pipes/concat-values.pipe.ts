import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'concatValuesPipe'})
export class ConcatValuesPipe implements PipeTransform {
  transform(value: any[], concatValues: any[], concatTechnique: 'push' | 'unshift' = 'push'): any[] {
    return concatTechnique === 'unshift' ? [...concatValues, ...value] : [...value, ...concatValues];
  }
}
