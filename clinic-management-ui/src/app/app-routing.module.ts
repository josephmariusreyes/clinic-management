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
        path: 'doctors',
        loadChildren: () => import('./features/doctors/doctors.module').then(m => m.DoctorsModule)
    },
    {
        path: 'patients',
        loadChildren: () => import('./features/patients/patients.module').then(m => m.PatientsModule)
    },
    {
        path: 'super-admin',
        loadChildren: () => import('./features/super-admin/super-admin.module').then(m => m.SuperAdminModule)
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
