import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from '../../../api/types';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit{
  @Input() movie: IMovie | null = null;
  rating: string = '';

  ngOnInit () {
    this.rating = this.movie && (!this.movie.ratingImdb ? 'null' : this.movie.ratingImdb < 5 ? 'low' : this.movie.ratingImdb < 7 ? 'average' : 'high') || 'low';
  }
}
