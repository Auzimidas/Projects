import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Homework2Prob1PageRoutingModule } from './homework2-prob1-routing.module';

import { Homework2Prob1Page } from './homework2-prob1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Homework2Prob1PageRoutingModule
  ],
  declarations: [Homework2Prob1Page]
})
export class Homework2Prob1PageModule {}
