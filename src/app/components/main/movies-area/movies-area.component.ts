import {Component, OnInit} from '@angular/core';
import {IMovie} from '../../../types/types';
import {MoviesService} from '../../../api/movies.service';
import {ResponsiveService} from '../../../services/responsive.service';

@Component({
  selector: 'app-movies-area',
  templateUrl: './movies-area.component.html',
  styleUrls: ['./movies-area.component.scss']
})
export class MoviesAreaComponent implements OnInit{
  isLoading = false;
  movies: IMovie[] = [];
  screenSize: string = '';

  constructor(private moviesService: MoviesService, private responsiveService: ResponsiveService) {}

  ngOnInit() {
    // this.fetchMovies();
    this.responsiveService.mediaBreakpoint$.subscribe((size) => {
      this.screenSize = size;
    });
  }

  fetchMovies() {
    this.isLoading = true;
    this.moviesService.fetchMovies()
      .subscribe(movies => {
        this.movies = movies.items;
        this.isLoading = false;
      })
  }
}
