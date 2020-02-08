import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divideByPipe'
})
export class DivideByPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const evenUsers = [];
    for (const i of value) {
      if ((value[i].id % 2) === 0) {
        evenUsers.push(value[i]);
      }
    }
    return evenUsers;
  }
}
