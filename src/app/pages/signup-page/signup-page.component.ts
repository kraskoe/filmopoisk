import { Component } from '@angular/core';
import {AppEndpoints} from '../../router/router.constants';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {CustomValidators} from '../../validators/custom.validators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  link = AppEndpoints.LOGIN
  signUpForm: FormGroup = new FormGroup(
    {
      username: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9- _]{3,16}$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[\\w.-]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    [CustomValidators.PasswordMatch('password', 'confirmPassword')]
  );

  constructor(public authService: AuthService, private router: Router) {}

  submit() {
    const params = this.signUpForm.value;
    this.authService.signupUser(params)
      .subscribe(() => {
        this.signUpForm.reset();
        this.router.navigate([AppEndpoints.MOVIES]);
      })
  }

  get passwordMatchError() {
    // if (this.signUpForm.invalid) return;
    return this.signUpForm.getError('passwordMismatch') && this.signUpForm.get('confirmPassword')?.touched;
  }

  resetError() {
    this.authService.error = null;
  }
}
