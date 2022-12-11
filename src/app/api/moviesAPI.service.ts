import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {KINOPOISK_BASE_URL, MOVIES_ENDPOINT, PageType, PREMIERES_ENDPOINT, TOP_MOVIES_ENDPOINT} from './api.constants';
import {
  IMovie,
  IMoviesQueryParams,
  IMoviesResponse,
  IPremieresQueryParams,
  IPremieresResponse,
  ITopMoviesQueryParams,
  ITopMoviesResponse
} from './types';

@Injectable({providedIn: 'root'})
export class MoviesAPIService {
  isLoading = false;
  error: string | null = null;
  movies: IMovie[] | null = null;

  constructor(private http: HttpClient) {}

  getMovies(pageType: PageType, queryParams = {}) {
    this.isLoading = true;
    this.error = null;
    this.movies = null;

    this.fetchOnPageType(pageType, queryParams)
      .subscribe(
        {
          next: movies => {
            pageType === PageType.TOP ?
              this.movies = (movies as ITopMoviesResponse).films :
              this.movies = (movies as IMoviesResponse | IPremieresResponse).items;
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
      case PageType.TOP: return this.http.get<ITopMoviesResponse>(KINOPOISK_BASE_URL + TOP_MOVIES_ENDPOINT, {params});
      case PageType.PREMIERES: return this.http.get<IPremieresResponse>(KINOPOISK_BASE_URL + PREMIERES_ENDPOINT, {params});
      default: return this.http.get<IMoviesResponse>(KINOPOISK_BASE_URL + MOVIES_ENDPOINT, {params});
    }
  }
}
