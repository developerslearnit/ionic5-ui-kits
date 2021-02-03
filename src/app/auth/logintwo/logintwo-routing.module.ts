import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogintwoPage } from './logintwo.page';

const routes: Routes = [
  {
    path: '',
    component: LogintwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogintwoPageRoutingModule {}
