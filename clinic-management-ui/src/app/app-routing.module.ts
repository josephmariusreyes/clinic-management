import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'user',
        loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)
    },
    {
        path: 'login',
        redirectTo: 'user/login',
        pathMatch: 'full'
    },
    {
        path: 'register',
        redirectTo: 'user/register',
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: 'user/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
