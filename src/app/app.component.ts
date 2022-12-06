import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filmopoisk';
  darkMode = false;

  toggleTheme() {
    this.darkMode = !this.darkMode;
    document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
  }
}
