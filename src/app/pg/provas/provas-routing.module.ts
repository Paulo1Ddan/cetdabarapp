import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvasPage } from './provas.page';

const routes: Routes = [
  {
    path: '',
    component: ProvasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvasPageRoutingModule {}
