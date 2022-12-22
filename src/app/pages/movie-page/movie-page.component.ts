import { Component } from '@angular/core';
import { Location } from '@angular/common'
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {ResponsiveService} from '../../services/responsive.service';
import {MoviesAPIService} from '../../api/moviesAPI.service';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent {
  screenSize: string = '';
  rating = '';
  sub: Subscription | undefined;
  isModalActive = false;
  slides = 3;
  private history: string[] = [];

  constructor(
    public moviesService: MoviesAPIService,
    private route: ActivatedRoute,
    private responsiveService: ResponsiveService,
    private router: Router,
    private location: Location
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    })
  }

  ngOnInit() {
    this.responsiveService.mediaBreakpoint$.subscribe((size) => {
      this.screenSize = size;
      switch (size) {
        case 'sm': {
          this.slides = 1;
          return;
        }
        case 'md': {
          this.slides = 3;
          return;
        }
        default: this.slides = 4;
      }
    });
    this.sub = this.route.params.subscribe((params: Params) => {
      //--- Daily limit of 500 requests ---//
      this.moviesService.getMovie(+params['id']);
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  toggleModalActive() {
    this.isModalActive = !this.isModalActive;
    if (this.isModalActive) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = '';
  }

  back(): void {
    console.log(this.history);
    // this.history.pop();
    if (this.history.length > 0) {
      console.log('back');
      this.location.back()
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
