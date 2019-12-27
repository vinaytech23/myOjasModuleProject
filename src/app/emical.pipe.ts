import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emical'
})
export class EmicalPipe implements PipeTransform {

  transform(data:number[]):number {
    return null;
  }

}
