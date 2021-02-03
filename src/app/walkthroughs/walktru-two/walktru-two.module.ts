import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalktruTwoPageRoutingModule } from './walktru-two-routing.module';

import { WalktruTwoPage } from './walktru-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalktruTwoPageRoutingModule
  ],
  declarations: [WalktruTwoPage]
})
export class WalktruTwoPageModule {}
