import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'references',
    pathMatch: 'full'
  },
  {
    path: 'references',
    children: [
      {
        path: '',
        loadChildren: () => import('./references/references.module').then( m => m.ReferencesPageModule)
      },
      {
        path: ':referenceId',
        loadChildren: () => import('./references/reference-detail/reference-detail.module').then( m => m.ReferenceDetailPageModule)
      }
    ]
  },
  {
    path: 'new-reference',
    loadChildren: () => import('./references/reference-add/reference-add.module').then(m => m.ReferenceAddPageModule)
  },
  {
    path: 'edit-reference',
    children: [
      {
        path: ':referenceId',
        loadChildren: () => import('./references/reference-edit/reference-edit.module').then( m => m.ReferenceEditPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
