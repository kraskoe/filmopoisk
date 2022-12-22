import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AppEndpoints} from '../../router/router.constants';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  link = AppEndpoints.SIGNUP
  signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.pattern('^[\\w.-]+@([\\w-]+\\.)+[\\w-]{2,4}$'), Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(public authService: AuthService, private router: Router) {
  }

  submit() {
    if (this.signInForm.invalid) return;
    const params = this.signInForm.value;
    this.authService.loginUser(params)
      .subscribe(() => {
        this.signInForm.reset();
        this.router.navigate([AppEndpoints.MOVIES]);
      })
  }

  resetError() {
    this.authService.error = null;
  }
}
