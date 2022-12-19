export interface IFilter {
  key: string,
  text: string,
}

export const filterKeys = {
  keyword: 'search',
  yearFrom: 'year min',
  yearTo: 'year max',
  ratingFrom: 'rating min',
  ratingTo: 'rating max',
  order: 'sort by',
  type: 'type',
  genres: 'genre',
  countries: 'country',
  page: ''
}

export const orderFilterKeys = {
  RATING: 'rating',
  NUM_VOTE: 'votes',
  YEAR: 'year'
}

export const typeFilterKeys = {
  FILM: 'film',
  TV_SHOW: 'TV show',
  TV_SERIES: 'TV series',
  MINI_SERIES: 'mini series',
  ALL: 'all'
}
