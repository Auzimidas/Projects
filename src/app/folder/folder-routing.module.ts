import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'madlib',
    loadChildren: () => import('./madlib/madlib/madlib.module').then( m => m.MadlibPageModule)
  },
  {
    path: 'homework1-prob10',
    loadChildren: () => import('./homework1_10/homework1-prob10/homework1-prob10.module').then( m => m.Homework1Prob10PageModule)
  },
  {
    path: 'homework1-prob9',
    loadChildren: () => import('./homework1_9/homework1-prob9/homework1-prob9.module').then( m => m.Homework1Prob9PageModule)
  },
  {
    path: 'homework1prob12',
    loadChildren: () => import('./homework1_12/homework1prob12/homework1prob12.module').then( m => m.Homework1prob12PageModule)
  },
  {
    path: 'homework1prob17',
    loadChildren: () => import('./homework1_17/homework1prob17/homework1prob17.module').then( m => m.Homework1prob17PageModule)
  },
  {
    path: 'homework2-prob1',
    loadChildren: () => import('./homework2_1/homework2-prob1/homework2-prob1.module').then( m => m.Homework2Prob1PageModule)
  },
  {
    path: 'homework2prob4',
    loadChildren: () => import('./homework2_4/homework2prob4/homework2prob4.module').then( m => m.Homework2prob4PageModule)
  },
  {
    path: 'homework2-prob7',
    loadChildren: () => import('./homework2_7/homework2-prob7/homework2-prob7.module').then( m => m.Homework2Prob7PageModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
