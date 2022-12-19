import {Params} from '@angular/router';
import {filterKeys, IFilter, orderFilterKeys, typeFilterKeys} from './active-filters.constants';
import {IFilterCountry, IFilterGenre} from '../../../api/types';

export function formFilterArray(params: Params, genres: IFilterGenre[], countries: IFilterCountry[]) {
  const filterArray: IFilter[] = [];
  for (let [k, v] of Object.entries(params)) {
    let value: any;

    if (k.toString() === 'page') break;

    switch (k.toString()) {
      case 'order': {
        value = orderFilterKeys[v as keyof typeof orderFilterKeys];
        break;
      }
      case 'type': {
        value = typeFilterKeys[v as keyof typeof typeFilterKeys];
        break;
      }
      case 'genres': {
        value = genres.find(item => item.id === +v)?.genre;
        break;
      }
      case 'countries': {
        value = countries.find(item => item.id === +v)?.country;
        break;
      }
      default: value = v;
    }

    filterArray.push({key: k.toString(), text: `${filterKeys[k as keyof typeof filterKeys]}: ${value}`})
  }
  return filterArray;
}
