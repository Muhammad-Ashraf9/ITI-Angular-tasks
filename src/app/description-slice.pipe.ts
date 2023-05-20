import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionSlice'
})
export class DescriptionSlicePipe implements PipeTransform {

  transform(value: string, args?: number): string {
    return value.slice(0,30);
  }

}
