import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'c1',
        pathMatch: 'full'
    },
    {
        path: 'c1',
        loadComponent: async () => (await import('../c1/c1.component')).C1Component,
    },
    {
        path: 'c2',
        loadComponent: () => import('../c2/c2.component').then((m => m.C2Component))
    }
];