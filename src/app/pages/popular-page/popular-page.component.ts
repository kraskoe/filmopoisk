import { Component } from '@angular/core';

import {PageType} from '../../api/api.constants';
import {Subscription} from 'rxjs';
import {AppEndpoints} from '../../router/router.constants';
import {MoviesAPIService} from '../../api/moviesAPI.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrls: ['./popular-page.component.scss']
})
export class PopularPageComponent {
  type = PageType.TOP;
  sub: Subscription | undefined;
  page = 1;
  link = AppEndpoints.TOP;

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
