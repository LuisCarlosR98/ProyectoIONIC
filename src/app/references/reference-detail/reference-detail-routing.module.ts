import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferenceDetailPage } from './reference-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ReferenceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferenceDetailPageRoutingModule {}
