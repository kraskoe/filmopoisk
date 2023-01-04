import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() key: string = '';
  @Input() text: string | undefined;
  sub: Subscription | undefined;
  params: Params | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.params = params;
    })
  }

  removeFilter(key: string) {
    const { [key as keyof typeof this.params]: removedParam, ...restParams } = this.params;
    const url = this.router.url.split('?')[0];
    delete restParams['page'];
    this.router.navigate([url], {
      queryParams: restParams,
    });
  }
}
