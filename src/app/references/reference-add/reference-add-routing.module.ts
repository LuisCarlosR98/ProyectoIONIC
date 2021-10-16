import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferenceAddPage } from './reference-add.page';

const routes: Routes = [
  {
    path: '',
    component: ReferenceAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferenceAddPageRoutingModule {}
