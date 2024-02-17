import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPageComponent } from './pages/favorites-page/favorite-page.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritesPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
