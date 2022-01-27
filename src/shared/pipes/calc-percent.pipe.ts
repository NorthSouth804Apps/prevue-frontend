import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'calcPercent'})
export class CalcPercentPipe implements PipeTransform {
  transform(value: number, total: number): number {
    if (!total || !value) {
      return 0;
    }
    return Math.floor(value * 100 / total);
  }
}
