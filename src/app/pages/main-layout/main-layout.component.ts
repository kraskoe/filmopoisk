import {Component, OnInit} from '@angular/core';
import {MoviesAPIService} from '../../api/moviesAPI.service';
import {ResponsiveService} from '../../services/responsive.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  screenSize: string = '';

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit() {
    this.responsiveService.mediaBreakpoint$.subscribe((size) => {
      this.screenSize = size;
    });
  }
}
