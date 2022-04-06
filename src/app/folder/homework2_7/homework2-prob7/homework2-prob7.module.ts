import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Homework2Prob7PageRoutingModule } from './homework2-prob7-routing.module';

import { Homework2Prob7Page } from './homework2-prob7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Homework2Prob7PageRoutingModule
  ],
  declarations: [Homework2Prob7Page]
})
export class Homework2Prob7PageModule {}
