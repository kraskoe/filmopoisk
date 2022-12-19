import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import {MonthString} from '../api.constants';
import {environment} from '../../../environments/environment';

@Injectable()
export class PremieresInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes(environment.PREMIERES_ENDPOINT)) {
      if (!request.params.has('year') || !request.params.has('month')) {
        let params = request.params;
        const date = new Date();
        if (!request.params.has('year')) params = params.append('year', date.getFullYear());
        if (!request.params.has('month')) params = params.append('month', MonthString[date.getMonth()]);
        const paramsReq = request.clone({
          params
        });
        return next.handle(paramsReq);
      }
    }
    return next.handle(request);
  }
}
