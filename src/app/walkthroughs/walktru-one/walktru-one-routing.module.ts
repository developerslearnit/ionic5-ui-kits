import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalktruOnePage } from './walktru-one.page';

const routes: Routes = [
  {
    path: '',
    component: WalktruOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalktruOnePageRoutingModule {}
