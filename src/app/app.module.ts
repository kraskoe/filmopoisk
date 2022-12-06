import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import {MainWrapperComponent} from './components/shared/main-wrapper/main-wrapper.component';
import {WidthContainerComponent} from './components/shared/width-container/width-container.component';
import {MainAreaComponent} from './components/main/main-area/main-area.component';
import { MoviesAreaComponent } from './components/main/movies-area/movies-area.component';
import { MovieCardComponent } from './components/main/movie-card/movie-card.component';
import {AuthInterceptor} from './api/auth.inteceptor';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    MainWrapperComponent,
    WidthContainerComponent,
    MainAreaComponent,
    MoviesAreaComponent,
    MovieCardComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
