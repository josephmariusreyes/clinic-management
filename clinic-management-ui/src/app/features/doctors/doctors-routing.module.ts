import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DummyGuard } from '../../core/route-guard/dummy.guard';
import { DoctorsListComponent } from './containers/doctors-list/doctors-list.component';
import { DoctorsDetailComponent } from './containers/doctors-detail/doctors-list.component';

const routes: Routes = [
    {
        path: '',
        component: DoctorsListComponent,
        canActivate: [DummyGuard],
        data: { allowedAuth: ['doctor', 'clinic-admin', 'super-admin'] }
    },
    {
        path: ':id',
        component: DoctorsDetailComponent,
        canActivate: [DummyGuard],
        data: { allowedAuth: ['doctor', 'clinic-admin', 'super-admin'] }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DoctorsRoutingModule { }
