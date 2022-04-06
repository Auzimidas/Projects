import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Homework2prob4PageRoutingModule } from './homework2prob4-routing.module';

import { Homework2prob4Page } from './homework2prob4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Homework2prob4PageRoutingModule
  ],
  declarations: [Homework2prob4Page]
})
export class Homework2prob4PageModule {}
