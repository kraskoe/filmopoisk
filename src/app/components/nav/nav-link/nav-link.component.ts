import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
  //--- Encapsulation shadowDOM disables global styles ---//
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class NavLinkComponent {
  @Input() link: string = '';
  @Input() params?: object = {};
  @Input() icon: string = '';
  @Input() size?: number = 20;
  @Input() text: string = '';

  constructor(private router: Router) {}

  isLinkActive(url: string): boolean {
    const queryParamsIndex = this.router.url.indexOf('?');
    const baseUrl = queryParamsIndex === -1 ? this.router.url :
      this.router.url.slice(0, queryParamsIndex);
    return baseUrl === url;
  }
}
