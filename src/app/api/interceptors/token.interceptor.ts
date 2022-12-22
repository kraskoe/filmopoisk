import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import {Injectable, Provider} from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.append('X-API-KEY', environment.TOKEN)
    });
    return next.handle(authReq);
  }
}

 export const tokenInterceptorProvider: Provider = {
   provide: HTTP_INTERCEPTORS,
   useClass: TokenInterceptor,
   multi: true
 }
