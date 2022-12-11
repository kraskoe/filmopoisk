import {Component} from '@angular/core';

@Component({
  selector: 'app-width-container',
  template: `<div>
    <ng-content></ng-content>
  </div>`,
  styles: [`div {
    width: 100%;
  }`]

})
export class WidthContainerComponent {

}
