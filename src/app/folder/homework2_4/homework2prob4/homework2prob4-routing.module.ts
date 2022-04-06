import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homework2prob4Page } from './homework2prob4.page';

const routes: Routes = [
  {
    path: '',
    component: Homework2prob4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homework2prob4PageRoutingModule {}
