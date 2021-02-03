import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogintwoPageRoutingModule } from './logintwo-routing.module';

import { LogintwoPage } from './logintwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogintwoPageRoutingModule
  ],
  declarations: [LogintwoPage]
})
export class LogintwoPageModule {}
