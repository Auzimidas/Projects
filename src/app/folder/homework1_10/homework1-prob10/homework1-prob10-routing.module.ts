import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homework1Prob10Page } from './homework1-prob10.page';

const routes: Routes = [
  {
    path: '',
    component: Homework1Prob10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homework1Prob10PageRoutingModule {}
