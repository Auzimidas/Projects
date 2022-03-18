import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homework1Prob12Page } from './homework1-prob12.page';

const routes: Routes = [
  {
    path: '',
    component: Homework1Prob12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homework1Prob12PageRoutingModule {}
