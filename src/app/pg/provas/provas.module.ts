import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProvasPageRoutingModule } from './provas-routing.module';

import { ProvasPage } from './provas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProvasPageRoutingModule
  ],
  declarations: [ProvasPage]
})
export class ProvasPageModule {}
