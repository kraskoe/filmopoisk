import {MonthString, MoviesQueryOrder, MoviesQueryType, TopMoviesQueryType} from './api.constants';

export interface ICountry {
  country: string
}

export interface IGenre {
  genre: string
}

export interface IMovie {
  kinopoiskId: number,
  imdbId: string,
  nameRu: string,
  nameEn: string | null,
  nameOriginal: string,
  countries: ICountry[],
  genres: IGenre[],
  ratingKinopoisk: number,
  ratingImdb: number,
  year: number,
  type: string,
  posterUrl: string,
  posterUrlPreview: string
}

export interface IMoviesQueryParams {
  countries?: number[] | null,
  genres?: number[] | null,
  order?: MoviesQueryOrder | null,
  type?: MoviesQueryType | null,
  ratingFrom?: number | null,
  ratingTo?: number | null,
  yearFrom?: number | null,
  yearTo?: number | null,
  imdbId?: string | null,
  keyword?: string | null,
  page?: number | null
}

export interface ITopMoviesQueryParams {
  type?: TopMoviesQueryType | null,
  page?: number | null
}

export interface IPremieresQueryParams {
  year: number | null,
  month: MonthString | null
}

export interface IMoviesResponse {
  total: number,
  totalPages: number,
  items: IMovie[]
}

export interface ITopMoviesResponse {
  pagesCount: number,
  films: IMovie[]
}

export interface IPremieresResponse {
  total: number,
  items: IMovie[]
}
