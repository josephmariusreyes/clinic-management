import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientsListComponent } from './containers/patients-list/patients-list.compoment';
import { PatientsDetailComponent } from './containers/patients-detail/patients-detail.component';

const routes: Routes = [
	{ path: '', component: PatientsListComponent },
	{ path: ':id', component: PatientsDetailComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PatientsRoutingModule { }
