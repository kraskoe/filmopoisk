import { Component } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {MonthString, PageType} from '../../api/api.constants';
import {AppEndpoints} from '../../router/router.constants';

@Component({
  selector: 'app-premieres-page',
  templateUrl: './premieres-page.component.html',
  styleUrls: ['./premieres-page.component.scss']
})
export class PremieresPageComponent {
  type = PageType.PREMIERES;
  sub: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (!('year' in params) || !('month' in params)) {
        const newParams = {...params}
        const date = new Date();
        if (!('year' in newParams)) newParams['year'] = date.getFullYear();
        if (!('month' in newParams)) newParams['month'] =  MonthString[date.getMonth()];

        this.router.navigate([AppEndpoints.PREMIERES], {
          queryParams: newParams,
        });
      }
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

}
