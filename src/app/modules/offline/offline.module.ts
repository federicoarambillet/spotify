import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineRoutingModule } from './offline-routing.module';
import { SharedModule } from '@shared/shared.module';
import { OfflinePageComponent } from './pages/offline-page/offline-page.component';


@NgModule({
  declarations: [
    OfflinePageComponent
  ],
  imports: [
    CommonModule,
    OfflineRoutingModule,
    SharedModule
  ]
})

export class OfflineModule { }
