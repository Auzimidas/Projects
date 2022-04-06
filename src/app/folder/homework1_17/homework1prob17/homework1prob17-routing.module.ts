import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homework1prob17Page } from './homework1prob17.page';

const routes: Routes = [
  {
    path: '',
    component: Homework1prob17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homework1prob17PageRoutingModule {}
