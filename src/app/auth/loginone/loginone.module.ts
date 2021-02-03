import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginonePageRoutingModule } from './loginone-routing.module';

import { LoginonePage } from './loginone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginonePageRoutingModule
  ],
  declarations: [LoginonePage]
})
export class LoginonePageModule {}
