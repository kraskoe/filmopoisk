import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

import {PageType} from '../../../api/api.constants';
import {MoviesAPIService} from '../../../api/moviesAPI.service';

@Component({
  selector: 'app-movies-area',
  templateUrl: './movies-area.component.html',
  styleUrls: ['./movies-area.component.scss']
})
export class MoviesAreaComponent implements OnInit, OnDestroy {
  sub: Subscription | undefined;

  @Input() pageType: PageType = PageType.HOME;

  constructor(public moviesService: MoviesAPIService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params: Params) => {
      //--- Daily limit of 500 requests ---//
      // this.moviesService.getMovies(this.pageType, params);
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
