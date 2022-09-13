import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheCursoPageRoutingModule } from './detalhe-curso-routing.module';

import { DetalheCursoPage } from './detalhe-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheCursoPageRoutingModule
  ],
  declarations: [DetalheCursoPage]
})
export class DetalheCursoPageModule {}
