import { Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: 'auth',
        //Lazy loading
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '',
        component: HomePageComponent,
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    }
];
