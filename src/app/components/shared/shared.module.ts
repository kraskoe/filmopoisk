import {NgModule} from '@angular/core';
import {LogoComponent} from './logo/logo.component';
import {SpinnerComponent} from './spinner/spinner.component';

@NgModule({
  declarations: [
    LogoComponent,
    SpinnerComponent,
  ],
  imports: [],
  exports: [
    LogoComponent,
    SpinnerComponent,
  ]
})

export class SharedModule {}
