import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarDadosPageRoutingModule } from './alterar-dados-routing.module';

import { AlterarDadosPage } from './alterar-dados.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarDadosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AlterarDadosPage]
})
export class AlterarDadosPageModule {}
