import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfflinePageComponent } from './pages/offline-page/offline-page.component';

const routes: Routes = [
  {
    path: '',
    component: OfflinePageComponent,
    // outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfflineRoutingModule { }
