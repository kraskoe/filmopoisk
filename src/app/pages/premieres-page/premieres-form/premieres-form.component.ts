import {Component, ElementRef, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {MonthString} from '../../../api/api.constants';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FilterFormService} from '../../../services/filter-form.service';
import {MoviesAPIService} from '../../../api/moviesAPI.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AppEndpoints} from '../../../router/router.constants';

@Component({
  selector: 'app-premieres-form',
  templateUrl: './premieres-form.component.html',
  styleUrls: ['./premieres-form.component.scss']
})
export class PremieresFormComponent {
  sub: Subscription | undefined;
  months = MonthString;
  monthsNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  form: FormGroup = new FormGroup({
    year: new FormControl('', [Validators.min(1895), Validators.max(this.getMaxYear()),Validators.required]),
    month: new FormControl('', [Validators.required]),
  });

  @ViewChild('premieres_filter_form', { static: true }) filterFormElement: ElementRef | undefined;

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

    this.router.navigate([AppEndpoints.PREMIERES], {
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
    this.router.navigate([AppEndpoints.PREMIERES]);
  }

  getMaxYear() {
    return (new Date()).getFullYear() + 10;
  }
}
