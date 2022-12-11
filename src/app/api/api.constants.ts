export const TOKEN = 'b60ac02b-c031-4aa9-975d-2784607ea79d';

export const KINOPOISK_BASE_URL = 'https://kinopoiskapiunofficial.tech';
export const MOVIES_ENDPOINT = '/api/v2.2/films';
export const TOP_MOVIES_ENDPOINT = '/api/v2.2/films/top';
export const PREMIERES_ENDPOINT = '/api/v2.2/films/premieres';

export enum MoviesQueryOrder {
  RATING = 'RATING',
  NUM_VOTE = 'NUM_VOTE',
  YEAR = 'YEAR'
}

export enum MoviesQueryType {
  FILM = 'FILM',
  TV_SHOW = 'TV_SHOW',
  TV_SERIES = 'TV_SERIES',
  MINI_SERIES = 'MINI_SERIES',
  ALL = 'ALL'
}

export enum TopMoviesQueryType {
  TOP_100 = 'TOP_100_POPULAR_FILMS',
  TOP_250 = 'TOP_250_BEST_FILMS',
  TOP_AWAIT = 'TOP_AWAIT_FILMS'
}

export enum PageType {
  HOME = 'home',
  TOP = 'popular',
  PREMIERES = 'premieres'
}

export enum MonthString {
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER
}
