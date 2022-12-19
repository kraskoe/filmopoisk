import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ageRating'
})
export class AgeRatingPipe implements PipeTransform{
  transform(rating: string | undefined): string {
    if (rating) return `${rating.replace('age', '')}+`;
    return '';
  }
}
