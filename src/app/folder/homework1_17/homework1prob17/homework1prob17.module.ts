import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Homework1prob17PageRoutingModule } from './homework1prob17-routing.module';

import { Homework1prob17Page } from './homework1prob17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Homework1prob17PageRoutingModule
  ],
  declarations: [Homework1prob17Page]
})
export class Homework1prob17PageModule {}
