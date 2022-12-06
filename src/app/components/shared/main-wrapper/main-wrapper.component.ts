import {Component} from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  template: `<div>
    <ng-content></ng-content>
  </div>`,
  styles: [`div {
    background-color: var(--color-background)
  }`]

})
export class MainWrapperComponent {

}
