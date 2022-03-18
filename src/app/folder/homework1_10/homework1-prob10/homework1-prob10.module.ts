import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Homework1Prob10PageRoutingModule } from './homework1-prob10-routing.module';

import { Homework1Prob10Page } from './homework1-prob10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Homework1Prob10PageRoutingModule
  ],
  declarations: [Homework1Prob10Page]
})
export class Homework1Prob10PageModule {}
