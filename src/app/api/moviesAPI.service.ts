import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {forkJoin, Observable, tap} from 'rxjs';

import {PageType} from './api.constants';
import {
  IFilterCountry,
  IFiltersResponse, IFilterGenre,
  IMovie,
  IMoviesQueryParams,
  IMoviesResponse,
  IPremieresQueryParams,
  IPremieresResponse,
  ITopMoviesQueryParams,
  ITopMoviesResponse, ISingleMovie, ISimilarMovie, ISimilarMoviesResponse
} from './types';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class MoviesAPIService {
  isLoading = false;
  filtersLoading = false;
  isMovieLoading = false;
  isFavLoading = false;
  error: string | null = null;
  filtersError: string | null = null;
  movieError: string | null = null;
  favError: string | null = null;
  movies: IMovie[] | null = null;
  favMovies: ISingleMovie[] | null = null;
  genres: IFilterGenre[] | null = null;
  countries: IFilterCountry[] | null = null;
  movie: ISingleMovie | null = null;
  similarMovies: ISimilarMovie[] | null = null;
  pages: number | null = null;
  totalItems: number | null = null;

  constructor(private http: HttpClient) {}

  getMovies(pageType: PageType, queryParams = {}) {
    this.isLoading = true;
    this.error = null;
    this.movies = null;

    this.fetchOnPageType(pageType, queryParams)
      .subscribe(
        {
          next: response => {
            pageType === PageType.TOP ?
              this.movies = (response as ITopMoviesResponse).films :
              this.movies = (response as IMoviesResponse | IPremieresResponse).items;
            if (pageType === PageType.TOP) this.pages = (response as ITopMoviesResponse).pagesCount;
            if (pageType === PageType.HOME) {
              this.pages = (response as IMoviesResponse).totalPages;
              this.totalItems = (response as IMoviesResponse).total;
            }
            if (pageType === PageType.PREMIERES) this.totalItems = (response as IPremieresResponse).total;
            this.error = null;
            this.isLoading = false;
          },
          error: error => {
            this.isLoading = false;
            if (error.error.error) {
              this.error = error.error.error;
            } else if (error.error.message) {
              this.error = error.error.message;
            } else this.error = 'Server error';
          }
        }
      )
  }

  fetchOnPageType(pageType: PageType, queryParams: IMoviesQueryParams | ITopMoviesQueryParams | IPremieresQueryParams): Observable<ITopMoviesResponse | IPremieresResponse | IMoviesResponse> {
    let params = new HttpParams();
    for (let [key, value] of Object.entries(queryParams)) {
      params = params.append(key.toString(), value);
    }

    switch (pageType) {
      case PageType.TOP: return this.http.get<ITopMoviesResponse>(environment.KINOPOISK_BASE_URL + environment.TOP_MOVIES_ENDPOINT, {params});
      case PageType.PREMIERES: return this.http.get<IPremieresResponse>(environment.KINOPOISK_BASE_URL + environment.PREMIERES_ENDPOINT, {params});
      default: return this.http.get<IMoviesResponse>(environment.KINOPOISK_BASE_URL + environment.MOVIES_ENDPOINT, {params});
    }
  }

  getFilters() {
    this.filtersLoading = true;
    this.filtersError = null;
    this.genres = null;
    this.countries = null;

    this.http.get<IFiltersResponse>(environment.KINOPOISK_BASE_URL + environment.COUNTRIES_GENRES_ENDPOINT)
      .subscribe(
        {
          next: filters => {
            this.genres = (filters as IFiltersResponse).genres;
            this.countries = (filters as IFiltersResponse).countries;
            this.filtersError = null;
            this.filtersLoading = false;
          },
          error: error => {
            this.filtersLoading = false;
            if (error.error.error) {
              this.filtersError = error.error.error;
            } else if (error.error.message) {
              this.filtersError = error.error.message;
            } else this.filtersError = 'Server error';
          }
        }
      )
  }

  getMovie(id: number) {
    this.isMovieLoading = true;
    this.movieError = null;
    this.movie = null;

    return forkJoin([
      this.http.get<ISingleMovie>(environment.KINOPOISK_BASE_URL + environment.MOVIES_ENDPOINT + `/${id}`),
      this.http.get<ISimilarMoviesResponse>(environment.KINOPOISK_BASE_URL + environment.MOVIES_ENDPOINT + `/${id}/similars`)
    ])
      .subscribe(
        {
          next: results => {
            this.movie = results[0];
            this.similarMovies = results[1].items;
            this.movieError = null;
            this.isMovieLoading = false;
          },
          error: error => {
            this.isMovieLoading = false;
            if (error.error.error) {
              this.movieError = error.error.error;
            } else if (error.error.message) {
              this.movieError = error.error.message;
            } else this.movieError = 'Server error';
          }
        }
      )
  }

  getFavourites(ids: number[]) {
    this.isFavLoading = true;
    this.favError = null;
    this.favMovies = null;
    const favRequests = [];

    for (let id of ids) {
      favRequests.push(this.http.get<ISingleMovie>(environment.KINOPOISK_BASE_URL + environment.MOVIES_ENDPOINT + `/${id}`));
    }

    return forkJoin(favRequests)
      .subscribe(
        {
          next: results => {
            this.favMovies = results;
            this.favError = null;
            this.isFavLoading = false;
          },
          error: error => {
            this.isFavLoading = false;
            if (error.error.error) {
              this.favError = error.error.error;
            } else if (error.error.message) {
              this.favError = error.error.message;
            } else this.favError = 'Server error';
          }
        }
      )
  }
}
