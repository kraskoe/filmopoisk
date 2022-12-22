import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {appRoutes} from './router/routes'

const routes: Routes = appRoutes;

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
