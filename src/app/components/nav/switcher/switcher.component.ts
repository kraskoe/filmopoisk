import { Component } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent {
  darkMode = false;

  toggleTheme() {
    this.darkMode = !this.darkMode;
    document.body.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
  }
}
