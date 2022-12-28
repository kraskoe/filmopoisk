import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, UrlSegment} from '@angular/router';
import {getFavouritesLS, isFavourite, toggleFavouritesLS} from '../../../utils/favourites';
import {AppPaths} from '../../../router/router.constants';
import {MoviesAPIService} from '../../../api/moviesAPI.service';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-favourite-label',
  templateUrl: './favourite-label.component.html',
  styleUrls: ['./favourite-label.component.scss']
})
export class FavouriteLabelComponent implements OnInit{
  @Input() id: number | undefined;
  width = 14;
  height = 19;
  isFavourite = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesAPIService,
    private authService: AuthService
    ) {}

  ngOnInit() {
    this.isFavourite = (this.id && this.authService.user) ? isFavourite(+this.authService.user.id, this.id) : false;
  }

  onToggle(event: Event, id?: number) {
    (event as MouseEvent).stopPropagation();
    if (id && this.authService.user) {
      toggleFavouritesLS(+this.authService.user.id, id);
      this.isFavourite = isFavourite(+this.authService.user.id, id);
    }
    this.activatedRoute.url.subscribe((url: UrlSegment[]) => {
      if (url.find(urlPath => urlPath.path.includes(AppPaths.FAVOURITES)) && this.authService.user) {
        const favs = getFavouritesLS(+this.authService.user.id)
        if (favs.length) {
          this.moviesService.getFavourites(favs);
        } else {
          this.moviesService.favMovies = null;
        }
      }
    })
  }
}
