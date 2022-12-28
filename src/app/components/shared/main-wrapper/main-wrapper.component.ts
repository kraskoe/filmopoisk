import {Component} from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  template: `<div>
    <ng-content></ng-content>
  </div>`,
  styles: [`div {
    min-height: 100%;
    background-color: var(--color-background);
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: row;

    @media (min-width: 36rem) {
      padding: 2.5rem;
    }

    @media (min-width: 64rem) {
      padding: 2.5rem 4rem;
    }
  }`]

})
export class MainWrapperComponent {

}
