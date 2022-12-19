import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'objectArrayMap'
})
export class ObjectArrayMapPipe implements PipeTransform{
  transform<T>(array: T[], key: string): any[] {
    return array.map(item => item[key as keyof typeof item]);
  }
}
