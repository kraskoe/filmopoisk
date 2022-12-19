import {Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

import {FilterFormService} from '../../../services/filter-form.service';
import {AppEndpoints} from '../../../router/router.constants';
import {MoviesQueryOrder, MoviesQueryType} from '../../../api/api.constants';
import {MoviesAPIService} from '../../../api/moviesAPI.service';

@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.scss']
})
export class MoviesFormComponent {
  sub: Subscription | undefined;
  moviesType = MoviesQueryType;
  moviesOrder = MoviesQueryOrder;
  form: FormGroup = new FormGroup({
    keyword: new FormControl('', [Validators.minLength(2)]),
    yearFrom: new FormControl('', [Validators.min(1895), Validators.max(this.getMaxYear()), Validators.pattern('^[0-9]+$')]),
    yearTo: new FormControl('', [Validators.min(1895), Validators.max(this.getMaxYear()), Validators.pattern('^[0-9]+$')]),
    ratingFrom: new FormControl('', [Validators.min(1), Validators.max(10), Validators.pattern('^[0-9]+$')]),
    ratingTo: new FormControl('', [Validators.min(1), Validators.max(10), Validators.pattern('^[0-9]+$')]),
    order: new FormControl(''),
    type: new FormControl(''),
    countries: new FormControl(''),
    genres: new FormControl(''),
  });

  @ViewChild('movies_filter_form', { static: true }) filterFormElement: ElementRef | undefined;

  constructor(public filterFormService: FilterFormService, public moviesService: MoviesAPIService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    //--- Daily limit of 500 requests ---//
    // this.moviesService.getFilters();
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

    this.router.navigate([AppEndpoints.MOVIES], {
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
    this.router.navigate([AppEndpoints.MOVIES]);
  }

  getMaxYear() {
    return (new Date()).getFullYear() + 10;
  }
}
