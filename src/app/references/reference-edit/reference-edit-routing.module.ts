import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferenceEditPage } from './reference-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ReferenceEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferenceEditPageRoutingModule {}
