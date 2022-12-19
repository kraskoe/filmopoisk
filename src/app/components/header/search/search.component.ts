import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router, UrlSegment} from '@angular/router';
import {Subscription} from 'rxjs';
import {ISearchParams} from './type';
import {AppEndpoints} from '../../../router/router.constants';
import {FilterFormService} from '../../../services/filter-form.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  filterActive = false;
  keyword = '';
  sub: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private filterFormService: FilterFormService) {}

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.keyword = (params as ISearchParams).keyword;
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  toggleFilter() {
    this.filterFormService.toggleActive();
  }

  onBlur() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.keyword = (params as ISearchParams).keyword;
    })
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

  isFilterPage() {
    const pattern = /\/\d+/;
    return (this.router.url.includes(AppEndpoints.MOVIES) && !pattern.test(this.router.url)) || this.router.url.includes(AppEndpoints.TOP) || this.router.url.includes(AppEndpoints.PREMIERES);
  }
}
