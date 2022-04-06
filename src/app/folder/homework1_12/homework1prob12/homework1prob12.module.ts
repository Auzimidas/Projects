import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Homework1prob12PageRoutingModule } from './homework1prob12-routing.module';

import { Homework1prob12Page } from './homework1prob12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Homework1prob12PageRoutingModule
  ],
  declarations: [Homework1prob12Page]
})
export class Homework1prob12PageModule {}
