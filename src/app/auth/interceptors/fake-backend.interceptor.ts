import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';

import {IUser, IUserBasic} from '../types';
import {environment} from '../../../environments/environment';

//--- array in local storage for registered users ---//
const usersKey = 'auth-users';
let users: IUser[] = JSON.parse(localStorage.getItem(usersKey)!) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return handleRoute();

    function handleRoute() {
      switch (true) {
        case url.endsWith(environment.AUTHENTICATE_ENDPOINT) && method === 'POST':
          return authenticate();
        case url.endsWith(environment.REGISTER_ENDPOINT) && method === 'POST':
          return register();
        case url.endsWith(environment.USERS_ENDPOINT) && method === 'GET':
          return getUsers();
        case url.match(/\/users\/\d+$/) && method === 'GET':
          return getUserById();
        // case url.match(/\/users\/\d+$/) && method === 'PUT':
        //   return updateUser();
        case url.match(/\/users\/\d+$/) && method === 'DELETE':
          return deleteUser();
        default:
          return next.handle(request);
      }
    }

    //--- route functions ---//

    function authenticate() {
      const { email, password } = body;
      const user = users.find(x => x.email === email && x.password === password);
      if (!user) return error('Email or password is incorrect');
      return ok(basicDetails(user));
    }

    function register() {
      const user = body

      if (users.find(x => x.email === user.email)) {
        return error('Email "' + user.email + '" is already registered')
      }

      user.id = users.length ? users.length + 1 : 1;
      users.push(user);
      localStorage.setItem(usersKey, JSON.stringify(users));
      return ok(basicDetails(user));
    }

    function getUsers() {
      if (!isLoggedIn()) return unauthorized();
      return ok(users.map(x => basicDetails(x)));
    }

    function getUserById() {
      if (!isLoggedIn()) return unauthorized();

      const user = users.find(x => x.id === getIdFromUrl());
      if (!user) return error('User not found');
      return ok(basicDetails(user));
    }

    // function updateUser() {
    //   if (!isLoggedIn()) return unauthorized();
    //
    //   let params = body;
    //   let user = users.find(x => x.id === getIdFromUrl());
    //
    //   //--- only update password if entered ---//
    //   if (!params.password) {
    //     delete params.password;
    //   }
    //
    //   //--- update and save user ---//
    //   user = Object.assign(user, params);
    //   localStorage.setItem(usersKey, JSON.stringify(users));
    //
    //   return ok();
    // }

    function deleteUser() {
      if (!isLoggedIn()) return unauthorized();

      users = users.filter(x => x.id !== getIdFromUrl());
      localStorage.setItem(usersKey, JSON.stringify(users));
      return ok();
    }

    //--- helper functions ---//

    function ok(body?: any) {
      return of(new HttpResponse({ status: 200, body }))
        .pipe(delay(1000)); //--- delay observable to simulate server api call
    }

    function error(message: string) {
      return throwError(() => ({ error: { message } }))
        .pipe(materialize(), delay(1000), dematerialize()); //--- call materialize and dematerialize to ensure delay even if an error is thrown ;
    }

    function unauthorized() {
      return throwError(() => ({ status: 401, error: { message: 'Unauthorized' } }))
        .pipe(materialize(), delay(1000), dematerialize());
    }

    function basicDetails(user: IUser): IUserBasic {
      const { id, username, email } = user;
      return { id, username, email };
    }

    function isLoggedIn() {
      return !!headers.get('Authorization');
    }

    function getIdFromUrl() {
      const urlParts = url.split('/');
      return urlParts[urlParts.length - 1];
    }
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
