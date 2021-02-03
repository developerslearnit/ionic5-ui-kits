import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginthreePage } from './loginthree.page';

const routes: Routes = [
  {
    path: '',
    component: LoginthreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginthreePageRoutingModule {}
