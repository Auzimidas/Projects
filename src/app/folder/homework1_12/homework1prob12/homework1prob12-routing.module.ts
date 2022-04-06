import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homework1prob12Page } from './homework1prob12.page';

const routes: Routes = [
  {
    path: '',
    component: Homework1prob12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homework1prob12PageRoutingModule {}
