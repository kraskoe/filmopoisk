import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

import {IAuthRequest, IRegisterRequest, IUser, IUserBasic} from './types';
import {environment} from '../../environments/environment';
import {getLocalstorageItem, setLocalstorageItem} from '../utils/local-storage';
import {Router} from '@angular/router';
import {AppEndpoints} from '../router/router.constants';

@Injectable()
export class AuthService {
  user: IUserBasic | null = getLocalstorageItem('user') || null;
  error: string | null = null;
  isLoading = false;

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(body: IAuthRequest) {
    this.isLoading = true;
    this.error = null;
    this.user = null;

    return this.http.post<IUserBasic>(environment.KINOPOISK_BASE_URL + environment.AUTHENTICATE_ENDPOINT, body)
      .pipe(
        tap(
          {
            next: response => {
              this.error = null;
              this.isLoading = false;
              setLocalstorageItem('user', response);
              this.user = response;
            },
            error: error => {
              this.isLoading = false;
              this.error = error.error.message;
              localStorage.removeItem('user');
              this.user = null;
            }
          }
        )
      )
  }

  signupUser(body: IRegisterRequest):Observable<any> {
    this.isLoading = true;
    this.error = null;
    this.user = null;

    return this.http.post<IUserBasic>(environment.KINOPOISK_BASE_URL + environment.REGISTER_ENDPOINT, body)
      .pipe(
        tap(
          {
            next: response => {
              this.error = null;
              this.isLoading = false;
              setLocalstorageItem('user', response);
              this.user = response;
            },
            error: error => {
              this.isLoading = false;
              this.error = error.error.message;
              localStorage.removeItem('user');
              this.user = null;
            }
          }
        )
      )
  }

  logoutUser() {
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigate([AppEndpoints.MOVIES]);
  }
}
