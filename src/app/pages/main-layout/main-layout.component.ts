import {Component, OnInit} from '@angular/core';
import {ResponsiveService} from '../../services/responsive.service';
import {MainMenuService} from '../../services/main-menu.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  screenSize: string = '';

  constructor(private responsiveService: ResponsiveService, public mainMenuService: MainMenuService) {}

  ngOnInit() {
    this.responsiveService.mediaBreakpoint$.subscribe((size) => {
      this.screenSize = size;
    });
  }
}
