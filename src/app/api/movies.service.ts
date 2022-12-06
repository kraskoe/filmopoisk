import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KINOPOISK_BASE_URL, MOVIES_ENDPOINT} from './api.constants';
import {Observable} from 'rxjs';
import {IMoviesResponse} from '../types/types';

@Injectable({providedIn: 'root'})
export class MoviesService {
  constructor(private http: HttpClient) {}

  fetchMovies(): Observable<IMoviesResponse> {
    return this.http.get<IMoviesResponse>(KINOPOISK_BASE_URL + MOVIES_ENDPOINT);
  }
}
