import {Component, OnInit} from '@angular/core';
import {ResponsiveService} from '../../services/responsive.service';
import {AppEndpoints} from '../../router/router.constants';
import {AuthService} from '../../auth/auth.service';
import {getUserCredAbbreviation} from '../../utils/user-credentials';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  screenSize: string = '';
  userCreds: string | undefined;
  loginLink = AppEndpoints.LOGIN;
  signupLink = AppEndpoints.SIGNUP;

  constructor(public authService: AuthService, private responsiveService: ResponsiveService) {}

  ngOnInit() {
    this.responsiveService.mediaBreakpoint$.subscribe((size) => {
      this.screenSize = size;
    });
    if (this.authService.user) this.userCreds = getUserCredAbbreviation(this.authService.user.username);
  }
}
