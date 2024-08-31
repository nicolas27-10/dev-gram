import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegCliPageRoutingModule } from './reg-cli-routing.module';

import { RegCliPage } from './reg-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegCliPageRoutingModule
  ],
  declarations: [RegCliPage]
})
export class RegCliPageModule {}
