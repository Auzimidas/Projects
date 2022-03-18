import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Homework1Prob9PageRoutingModule } from './homework1-prob9-routing.module';

import { Homework1Prob9Page } from './homework1-prob9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Homework1Prob9PageRoutingModule
  ],
  declarations: [Homework1Prob9Page]
})
export class Homework1Prob9PageModule {}
