import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SwiperModule} from 'swiper/angular';

import {AuthModule} from './auth/auth.module';

import {tokenInterceptorProvider} from './api/interceptors/token.interceptor';
import {premieresInterceptorProvider} from './api/interceptors/premieres.interceptor';

import {ObjectArrayMapPipe} from './pipes/object-array-map.pipe';
import {ArrayJoinPipe} from './pipes/array-join.pipe';
import {MinutesToHoursPipe} from './pipes/minutes-to-hours.pipe';
import {AgeRatingPipe} from './pipes/age-rating.pipe';

import { AppComponent } from './app.component';
import {MainWrapperComponent} from './components/shared/main-wrapper/main-wrapper.component';
import {WidthContainerComponent} from './components/shared/width-container/width-container.component';
import { MoviesAreaComponent } from './components/main/movies-area/movies-area.component';
import { MovieCardComponent } from './components/main/movie-card/movie-card.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { PremieresPageComponent } from './pages/premieres-page/premieres-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import {SvgIconComponent} from './components/shared/svg-icon/svg-icon,component';
import { NavLinkComponent } from './components/nav/nav-link/nav-link.component';
import { HeaderComponent } from './components/header/header.component';
import { SwitcherComponent } from './components/nav/switcher/switcher.component';
import { SearchComponent } from './components/header/search/search.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MoviesFormComponent } from './pages/home-page/movies-form/movies-form.component';
import { TopFormComponent } from './pages/popular-page/top-form/top-form.component';
import { PremieresFormComponent } from './pages/premieres-page/premieres-form/premieres-form.component';
import { SimilarsCardComponent } from './pages/movie-page/similars-card/similars-card.component';
import { PaginationComponent } from './components/main/pagination/pagination.component';
import { BurgerButtonComponent } from './components/header/burger-button/burger-button.component';
import { NavMobileComponent } from './components/nav/nav-mobile/nav-mobile.component';
import { ActiveFiltersComponent } from './components/main/active-filters/active-filters.component';
import { FilterComponent } from './components/main/filter/filter.component';
import { AuthLayoutComponent } from './pages/auth-layout/auth-layout.component';
import {SharedModule} from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainWrapperComponent,
    WidthContainerComponent,
    MoviesAreaComponent,
    MovieCardComponent,
    MainLayoutComponent,
    HomePageComponent,
    PopularPageComponent,
    PremieresPageComponent,
    MoviePageComponent,
    NavBarComponent,
    SvgIconComponent,
    NavLinkComponent,
    HeaderComponent,
    SwitcherComponent,
    SearchComponent,
    NotFoundPageComponent,
    MoviesFormComponent,
    TopFormComponent,
    PremieresFormComponent,
    ObjectArrayMapPipe,
    ArrayJoinPipe,
    MinutesToHoursPipe,
    AgeRatingPipe,
    SimilarsCardComponent,
    PaginationComponent,
    BurgerButtonComponent,
    NavMobileComponent,
    ActiveFiltersComponent,
    FilterComponent,
    AuthLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    AuthModule,
    SharedModule,
  ],
  providers: [
    tokenInterceptorProvider,
    premieresInterceptorProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
