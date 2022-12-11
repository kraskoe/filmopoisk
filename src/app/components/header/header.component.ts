import {Component, OnInit} from '@angular/core';
import {ResponsiveService} from '../../services/responsive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  screenSize: string = '';

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit() {
    this.responsiveService.mediaBreakpoint$.subscribe((size) => {
      this.screenSize = size;
    });
  }
}
