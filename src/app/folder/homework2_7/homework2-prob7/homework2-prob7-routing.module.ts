import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homework2Prob7Page } from './homework2-prob7.page';

const routes: Routes = [
  {
    path: '',
    component: Homework2Prob7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homework2Prob7PageRoutingModule {}
