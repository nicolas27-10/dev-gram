import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegCliPage } from './reg-cli.page';

const routes: Routes = [
  {
    path: '',
    component: RegCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegCliPageRoutingModule {}
