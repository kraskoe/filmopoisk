import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class='spinner__wrapper'>
      <div class='spinner'></div>
    </div>
  `,
  styles: [`
    @keyframes spinner {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .spinner {
      width: 50px;
      height: 50px;
      border-bottom: 10px solid transparent; /* Light grey */
      border-top: 10px solid var(--color-primary); /* Black */
      border-left: 10px solid var(--color-primary); /* Black */
      border-right: 10px solid var(--color-primary); /* Black */
      border-radius: 50%;
      animation: spinner 1.5s linear infinite;
    }
    .spinner__wrapper {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class SpinnerComponent {

}
