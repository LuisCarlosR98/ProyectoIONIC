import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferenceDetailPageRoutingModule } from './reference-detail-routing.module';

import { ReferenceDetailPage } from './reference-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferenceDetailPageRoutingModule
  ],
  declarations: [ReferenceDetailPage]
})
export class ReferenceDetailPageModule {}
