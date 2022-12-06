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

export interface IMoviesResponse {
  total: number,
  totalPages: number,
  items: IMovie[]
}
