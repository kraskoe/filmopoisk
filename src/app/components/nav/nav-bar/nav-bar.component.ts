import {Component} from '@angular/core';
import {AppEndpoints} from '../../../router/router.constants';
import {MonthString} from '../../../api/api.constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  links = [
    {
      link: AppEndpoints.MOVIES,
      icon: 'home-icon',
      text: 'Home',
      size: 16
    },
    {
      link: AppEndpoints.TOP,
      icon: 'star-icon',
      text: 'Trends',
    },
    {
      link: AppEndpoints.PREMIERES,
      params: {
        year: (new Date()).getFullYear(),
        month: MonthString[(new Date()).getMonth()]
      },
      icon: 'hot-icon',
      text: 'Premieres',
    },
  ]
}
