import {Component, OnInit} from '@angular/core';
import {MoviesAPIService} from '../../api/moviesAPI.service';
import {getFavouritesLS} from '../../utils/favourites';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-favourites-page',
  templateUrl: './favourites-page.component.html',
  styleUrls: ['./favourites-page.component.scss']
})
export class FavouritesPageComponent implements OnInit {
  movieIDs: number[] = [];

  constructor(
    public moviesService: MoviesAPIService,
    private authService: AuthService
    ) {}

  ngOnInit() {
    if (this.authService.user) {
      this.movieIDs = getFavouritesLS(+this.authService.user.id);
      if (this.movieIDs.length) {
        this.moviesService.getFavourites(this.movieIDs);
      }
    }
  }
}
