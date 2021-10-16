import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferenceEditPageRoutingModule } from './reference-edit-routing.module';

import { ReferenceEditPage } from './reference-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferenceEditPageRoutingModule
  ],
  declarations: [ReferenceEditPage]
})
export class ReferenceEditPageModule {}
