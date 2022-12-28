import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {authRoutes} from '../router/auth-routes';
import {LoginPageComponent} from '../pages/login-page/login-page.component';
import {SignupPageComponent} from '../pages/signup-page/signup-page.component';
import {SharedModule} from '../components/shared/shared.module';
import {fakeBackendProvider} from './interceptors/fake-backend.interceptor';
import {AuthMenuComponent} from '../components/header/auth-menu/auth-menu.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';

@NgModule({
  declarations: [
    LoginPageComponent,
    SignupPageComponent,
    AuthMenuComponent,
  ],
  imports: [
    RouterModule.forChild(authRoutes),
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
    AuthMenuComponent,
  ],
  providers: [
    // provider used to create fake backend
    fakeBackendProvider,
    AuthService,
    AuthGuard,
  ],
})

export class AuthModule {}
