import {Component, OnInit} from '@angular/core';
import { navLinks } from '../nav.constants';
import {MainMenuService} from '../../../services/main-menu.service';
import {AppEndpoints} from '../../../router/router.constants';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.scss']
})
export class NavMobileComponent implements OnInit {
  links = navLinks;
  userCreds: string | undefined;
  loginLink = AppEndpoints.LOGIN;

  constructor(public mainMenuService: MainMenuService, public authService: AuthService) {}

  ngOnInit() {
    if (this.authService.user) this.userCreds = this.authService.user.username;
  }
}
