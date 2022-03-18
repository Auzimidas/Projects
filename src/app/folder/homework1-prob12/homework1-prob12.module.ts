import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Homework1Prob12PageRoutingModule } from './homework1-prob12-routing.module';

import { Homework1Prob12Page } from './homework1-prob12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Homework1Prob12PageRoutingModule
  ],
  declarations: [Homework1Prob12Page]
})
export class Homework1Prob12PageModule {}
