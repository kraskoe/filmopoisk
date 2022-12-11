import {Component} from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  template: `<div>
    <ng-content></ng-content>
  </div>`,
  styles: [`div {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: var(--color-background);
    display: flex;
    padding: 2rem 1.5rem;

    @media (min-width: (768rem / 16)) {
      padding: 2.5rem;
    }

    @media (min-width: (1024rem / 16)) {
      padding: 2.5rem 4rem;
    }
  }`]

})
export class MainWrapperComponent {

}
