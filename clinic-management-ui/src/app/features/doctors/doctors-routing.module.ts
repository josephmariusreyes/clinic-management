import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorsListComponent } from './containers/doctors-list/doctors-list.component';
import { DoctorsDetailComponent } from './containers/doctors-detail/doctors-list.component';

const routes: Routes = [
    { path: '', component: DoctorsListComponent },
    { path: ':id', component: DoctorsDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DoctorsRoutingModule { }