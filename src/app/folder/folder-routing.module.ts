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
    path: 'homework1-prob12',
    loadChildren: () => import('./homework1-prob12/homework1-prob12.module').then( m => m.Homework1Prob12PageModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
