import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferencesPage } from './references.page';

const routes: Routes = [
  {
    path: '',
    component: ReferencesPage
  },
  {
    path: 'reference-detail',
    loadChildren: () => import('./reference-detail/reference-detail.module').then( m => m.ReferenceDetailPageModule)
  },
  {
    path: 'reference-add',
    loadChildren: () => import('./reference-add/reference-add.module').then( m => m.ReferenceAddPageModule)
  },
  {
    path: 'reference-edit',
    loadChildren: () => import('./reference-edit/reference-edit.module').then( m => m.ReferenceEditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferencesPageRoutingModule {}
