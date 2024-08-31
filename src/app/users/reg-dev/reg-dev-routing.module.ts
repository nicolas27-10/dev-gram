import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegDevPage } from './reg-dev.page';

const routes: Routes = [
  {
    path: '',
    component: RegDevPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegDevPageRoutingModule {}
