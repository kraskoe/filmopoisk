import { Component } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent {
  lightMode = !!localStorage.getItem('lightMode') || false;

  toggleTheme() {
    this.lightMode = !this.lightMode;
    localStorage.setItem('lightMode', this.lightMode ? '1' : '');
    document.documentElement.setAttribute('data-theme', this.lightMode ? 'light' : 'dark');
  }
}
