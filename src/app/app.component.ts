import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'filmopoisk';
  screenSize: string = '';

  ngOnInit() {
    const lightMode = !!localStorage.getItem('lightMode') || false;
    if (lightMode) document.documentElement.setAttribute('data-theme', lightMode ? 'light' : 'dark');
  }
}
