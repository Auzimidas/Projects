import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homework1Prob9Page } from './homework1-prob9.page';

const routes: Routes = [
  {
    path: '',
    component: Homework1Prob9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homework1Prob9PageRoutingModule {}
