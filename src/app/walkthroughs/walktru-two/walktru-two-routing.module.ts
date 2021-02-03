import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalktruTwoPage } from './walktru-two.page';

const routes: Routes = [
  {
    path: '',
    component: WalktruTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalktruTwoPageRoutingModule {}
