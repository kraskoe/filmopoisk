import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

import {AuthService} from './auth.service';
import {AppEndpoints} from '../router/router.constants';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.user ? !!this.authService.user : this.router.navigate([AppEndpoints.LOGIN]);
  }
}
