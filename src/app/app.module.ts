import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainWrapperComponent} from './components/shared/main-wrapper/main-wrapper.component';
import {WidthContainerComponent} from './components/shared/width-container/width-container.component';
import { MoviesAreaComponent } from './components/main/movies-area/movies-area.component';
import { MovieCardComponent } from './components/main/movie-card/movie-card.component';
import {AuthInterceptor} from './api/auth.inteceptor';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { PremieresPageComponent } from './pages/premieres-page/premieres-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import {LogoComponent} from './components/shared/logo/logo.component';
import {SvgIconComponent} from './components/shared/svg-icon/svg-icon,component';
import { NavLinkComponent } from './components/nav/nav-link/nav-link.component';
import { HeaderComponent } from './components/header/header.component';
import { SwitcherComponent } from './components/nav/switcher/switcher.component';
import { SearchComponent } from './components/header/search/search.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    MainWrapperComponent,
    WidthContainerComponent,
    MoviesAreaComponent,
    MovieCardComponent,
    SpinnerComponent,
    MainLayoutComponent,
    HomePageComponent,
    PopularPageComponent,
    PremieresPageComponent,
    MoviePageComponent,
    NavBarComponent,
    LogoComponent,
    SvgIconComponent,
    NavLinkComponent,
    HeaderComponent,
    SwitcherComponent,
    SearchComponent,
    NotFoundPageComponent,
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
