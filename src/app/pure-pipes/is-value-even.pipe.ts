import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appIsValueEven',
  standalone: true,
})
export class IsValueEven implements PipeTransform {
  public transform(value: number, ...args: unknown[]): boolean {
    console.log('Pure pipe triggered!');

    return value % 2 === 0;
  }
}
