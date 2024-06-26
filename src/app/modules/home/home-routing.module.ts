import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule)
  },
  // {
  //   path: 'auth',
  //   //Lazy loading
  //   loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule)
  // },
  // {
  //   path: 'offline',
  //   loadChildren: () => import('@modules/offline/offline.module').then(m => m.OfflineModule)
  // },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: '/tracks'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
