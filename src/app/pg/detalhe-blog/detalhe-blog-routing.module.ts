import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheBlogPage } from './detalhe-blog.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheBlogPageRoutingModule {}
