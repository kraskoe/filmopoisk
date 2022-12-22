import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.scss']
})
export class AuthMenuComponent {
  @Input() link: string | undefined;
  @Input() text: string | undefined;
}
