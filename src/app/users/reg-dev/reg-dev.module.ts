import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegDevPageRoutingModule } from './reg-dev-routing.module';

import { RegDevPage } from './reg-dev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegDevPageRoutingModule
  ],
  declarations: [RegDevPage]
})
export class RegDevPageModule {}
