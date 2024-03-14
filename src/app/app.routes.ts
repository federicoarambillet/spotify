import { Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';

import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: 'offline',
        //Lazy loading
        loadChildren: () => import('./modules/offline/offline.module').then(m => m.OfflineModule)
    },
    {
        path: 'auth',
        //Lazy loading
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '',
        component: HomePageComponent,
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
        canActivate: [SessionGuard]
    },
//     {
//         path: '**',
//         // redirectTo: '/auth/login'
//         redirectTo: '/offline'
//     }
];
