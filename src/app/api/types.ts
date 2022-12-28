import {MonthString, MoviesQueryOrder, MoviesQueryType, TopMoviesQueryType} from './api.constants';

export interface ICountry {
  country?: string
}

export interface IGenre {
  genre?: string
}

export interface IFilterCountry {
  id: number,
  country: string
}

export interface IFilterGenre {
  id: number,
  genre: string
}

export interface IFiltersResponse {
  genres: IFilterGenre[],
  countries: IFilterCountry[]
}

export interface ISingleMovie {
  kinopoiskId: number,
  imdbId: string,
  nameRu: string,
  nameEn: string,
  nameOriginal: string,
  posterUrl: string,
  posterUrlPreview: string,
  coverUrl: string,
  logoUrl: string,
  reviewsCount: number,
  ratingGoodReview: number,
  ratingGoodReviewVoteCount: number,
  ratingKinopoisk: number,
  ratingKinopoiskVoteCount: number,
  ratingImdb: number,
  rating: number,
  ratingImdbVoteCount: number,
  ratingFilmCritics: number,
  ratingFilmCriticsVoteCount: number,
  ratingAwait: number,
  ratingAwaitCount: number,
  ratingRfCritics: number,
  ratingRfCriticsVoteCount: number,
  webUrl: string,
  year: number,
  filmLength: number,
  slogan: string,
  description: string,
  shortDescription: string,
  editorAnnotation: string,
  isTicketsAvailable: boolean,
  productionStatus: string,
  type: string,
  ratingMpaa: string,
  ratingAgeLimits: string,
  hasImax: boolean,
  has3D: boolean,
  lastSync: string,
  countries: ICountry[],
  genres: IGenre[],
  startYear: number,
  endYear: number,
  serial: boolean,
  shortFilm: boolean,
  completed: boolean

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
  rating: number,
  year: number,
  type: string,
  posterUrl: string,
  posterUrlPreview: string
}

export interface ISimilarMovie {
  filmId: number,
  nameRu: string,
  nameEn: string,
  nameOriginal: string,
  posterUrl: string,
  posterUrlPreview: string,
  relationType: string
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

export interface ISimilarMoviesResponse {
  total: number,
  items: ISimilarMovie[]
}
