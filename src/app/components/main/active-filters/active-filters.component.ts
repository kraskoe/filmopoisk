import { Component } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {formFilterArray} from './formFilterArray';
import {MoviesAPIService} from '../../../api/moviesAPI.service';
import {IFilter} from './active-filters.constants';

@Component({
  selector: 'app-active-filters',
  templateUrl: './active-filters.component.html',
  styleUrls: ['./active-filters.component.scss']
})
export class ActiveFiltersComponent {
  sub: Subscription | undefined;
  filterArray: IFilter[] = [];

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesAPIService) {}

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (this.moviesService?.genres && this.moviesService?.countries) {
        this.filterArray = formFilterArray(params, this.moviesService?.genres, this.moviesService?.countries);
      }
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
