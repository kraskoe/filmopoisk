import {Component, OnInit} from '@angular/core';

import {PageType} from '../../api/api.constants';
import {MoviesAPIService} from '../../api/moviesAPI.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {AppEndpoints} from '../../router/router.constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  type = PageType.HOME;
  sub: Subscription | undefined;
  page = 1;
  link = AppEndpoints.MOVIES;

  constructor(public moviesService: MoviesAPIService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params: Params) => {
      if ('page' in params) this.page = params['page'];
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
