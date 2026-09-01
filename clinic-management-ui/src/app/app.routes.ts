import { Routes } from '@angular/router';
import { usersRoutes } from './features/users/users.routes';

export const routes: Routes = [
    {
        path: 'auth',
        children: usersRoutes
    },
    {
        path: 'login',
        redirectTo: 'auth/login'
    },
    {
        path: 'register',
        redirectTo: 'auth/register'
    },
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    }
];
