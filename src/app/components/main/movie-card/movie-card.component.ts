import {Component, Input, OnInit} from '@angular/core';
import {IMovie, ISingleMovie} from '../../../api/types';
import {AppEndpoints} from '../../../router/router.constants';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit{
  @Input() movie: IMovie | ISingleMovie | null = null;
  @Input() id: number | undefined;
  rating: number = 0;
  ratingColor: string = '';
  link = AppEndpoints.MOVIES;

  constructor(public authService: AuthService) {}

  ngOnInit () {
    this.rating = this.movie && (this.movie.ratingImdb ? this.movie.ratingImdb : this.movie.rating) || 0;
    this.ratingColor = this.movie && (!this.rating ? 'null' : this.rating < 5 ? 'low' : this.rating < 7 ? 'average' : 'high') || 'low';
  }
}
