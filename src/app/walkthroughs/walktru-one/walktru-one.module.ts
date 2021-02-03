import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalktruOnePageRoutingModule } from './walktru-one-routing.module';

import { WalktruOnePage } from './walktru-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalktruOnePageRoutingModule
  ],
  declarations: [WalktruOnePage]
})
export class WalktruOnePageModule {}
