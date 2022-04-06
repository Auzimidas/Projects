import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homework2Prob1Page } from './homework2-prob1.page';

const routes: Routes = [
  {
    path: '',
    component: Homework2Prob1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homework2Prob1PageRoutingModule {}
