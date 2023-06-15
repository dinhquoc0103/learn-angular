import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentChar'
})
export class PercentCharPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value + '%';
  }

}
