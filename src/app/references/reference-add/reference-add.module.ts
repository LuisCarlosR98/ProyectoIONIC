import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferenceAddPageRoutingModule } from './reference-add-routing.module';

import { ReferenceAddPage } from './reference-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferenceAddPageRoutingModule
  ],
  declarations: [ReferenceAddPage]
})
export class ReferenceAddPageModule {}
