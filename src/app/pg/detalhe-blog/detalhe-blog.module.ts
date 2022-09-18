import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheBlogPageRoutingModule } from './detalhe-blog-routing.module';

import { DetalheBlogPage } from './detalhe-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheBlogPageRoutingModule
  ],
  declarations: [DetalheBlogPage]
})
export class DetalheBlogPageModule {}
