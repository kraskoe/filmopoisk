import {Component, ChangeDetectorRef, AfterContentChecked, OnInit} from '@angular/core';

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
export class HomePageComponent implements OnInit, AfterContentChecked {
  type = PageType.HOME;
  sub: Subscription | undefined;
  page = 1;
  link = AppEndpoints.MOVIES;

  constructor(public moviesService: MoviesAPIService, private route: ActivatedRoute, private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params: Params) => {
      if ('page' in params) this.page = params['page'];
    })
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
