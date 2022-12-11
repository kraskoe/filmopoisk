import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ISearchParams} from './type';
import {AppEndpoints} from '../../../router/router.constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  filterActive = false;
  keyword = '';
  sub: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.keyword = (params as ISearchParams).keyword;
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  toggleFilter() {
    this.filterActive = !this.filterActive
  }

  onEnterDown() {
    if (this.keyword.trim()) {
      this.router.navigate([AppEndpoints.MOVIES], {
        queryParams: {
          keyword: this.keyword.trim(),
        },
      });
    }
  }
}
