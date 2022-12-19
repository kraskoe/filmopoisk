import { Component } from '@angular/core';
import { links } from '../nav.constants';
import {MainMenuService} from '../../../services/main-menu.service';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.scss']
})
export class NavMobileComponent {
  links = links

  constructor(public mainMenuService: MainMenuService) {}
}
