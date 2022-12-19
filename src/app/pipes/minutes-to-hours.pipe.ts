import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'minutesToHours'
})
export class MinutesToHoursPipe implements PipeTransform{
  transform(minutes: string | null): string {
    if (minutes) return `${Math.floor(+minutes / 60)}:${+minutes % 60}`;
    return '';
  }
}
