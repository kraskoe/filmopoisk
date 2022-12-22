import {Routes} from '@angular/router';

import {MainLayoutComponent} from '../pages/main-layout/main-layout.component';
import {HomePageComponent} from '../pages/home-page/home-page.component';
import {MoviePageComponent} from '../pages/movie-page/movie-page.component';
import {PopularPageComponent} from '../pages/popular-page/popular-page.component';
import {PremieresPageComponent} from '../pages/premieres-page/premieres-page.component';
import {NotFoundPageComponent} from '../pages/not-found-page/not-found-page.component';
import {AppEndpoints, AppPaths} from './router.constants';

export const appRoutes: Routes = [{
  path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: AppEndpoints.MOVIES, pathMatch: 'full'},
    {path: '', component: HomePageComponent},
    {path: AppPaths.MOVIES, component: HomePageComponent},
    {path: AppPaths.MOVIE, component: MoviePageComponent},
    {path: AppPaths.TOP, component: PopularPageComponent},
    {path: AppPaths.PREMIERES, component: PremieresPageComponent},
  ]},
];
