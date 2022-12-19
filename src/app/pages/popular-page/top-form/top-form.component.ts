import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

import {FilterFormService} from '../../../services/filter-form.service';
import {MoviesAPIService} from '../../../api/moviesAPI.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AppEndpoints} from '../../../router/router.constants';
import {TopMoviesQueryType} from '../../../api/api.constants';

@Component({
  selector: 'app-top-form',
  templateUrl: './top-form.component.html',
  styleUrls: ['./top-form.component.scss']
})
export class TopFormComponent {
  sub: Subscription | undefined;
  topType = TopMoviesQueryType;
  form: FormGroup = new FormGroup({
    type: new FormControl(''),
  });

  @ViewChild('top_filter_form', { static: true }) filterFormElement: ElementRef | undefined;

  constructor(public filterFormService: FilterFormService, public moviesService: MoviesAPIService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.form.reset();
      this.form.patchValue(params);
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  submit() {
    const params = this.form.value;

    this.router.navigate([AppEndpoints.TOP], {
      queryParams: params,
    });
    this.filterFormService.toggleActive();
  }

  closeFilterMenu() {
    this.filterFormService.toggleActive();
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.form.reset();
      this.form.patchValue(params);
    })
  }

  resetFilters() {
    this.router.navigate([AppEndpoints.TOP]);
  }
}
