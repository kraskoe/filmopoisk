import {Routes} from '@angular/router';
import {AppEndpoints, AppPaths} from './router.constants';
import {AuthLayoutComponent} from '../pages/auth-layout/auth-layout.component';
import {NotFoundPageComponent} from '../pages/not-found-page/not-found-page.component';
import {LoginPageComponent} from '../pages/login-page/login-page.component';
import {SignupPageComponent} from '../pages/signup-page/signup-page.component';

export const authRoutes: Routes = [{
  path: AppPaths.AUTH, component: AuthLayoutComponent, children: [
    {path: '', redirectTo: AppEndpoints.LOGIN, pathMatch: 'full'},
    {path: AppPaths.LOGIN, component: LoginPageComponent},
    {path: AppPaths.SIGNUP, component: SignupPageComponent}
  ]},
  {path: '404', component: NotFoundPageComponent},
  {path: '**', component: NotFoundPageComponent}
];
