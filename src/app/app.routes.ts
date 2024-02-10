import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        //Lazy loading
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    }
];
