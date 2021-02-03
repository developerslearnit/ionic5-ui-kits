import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginthreePageRoutingModule } from './loginthree-routing.module';

import { LoginthreePage } from './loginthree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginthreePageRoutingModule
  ],
  declarations: [LoginthreePage]
})
export class LoginthreePageModule {}
