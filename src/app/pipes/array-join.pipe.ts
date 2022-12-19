import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'arrayJoin'
})
export class ArrayJoinPipe implements PipeTransform{
  transform<T>(array: T[], key: string): string {
    return array.join(key);
  }
}
