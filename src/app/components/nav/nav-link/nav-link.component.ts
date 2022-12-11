import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
  // --- Encapsulation shadowDOM disables global styles, unexpected behavior ---
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class NavLinkComponent {
  @Input() link: string = '';
  @Input() params?: object = {};
  @Input() icon: string = '';
  @Input() size?: number = 20;
  @Input() text: string = '';
}
