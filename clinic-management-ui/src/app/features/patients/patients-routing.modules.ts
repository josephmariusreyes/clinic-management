import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DummyGuard } from '../../core/route-guard/dummy.guard';
import { PatientsListComponent } from './containers/patients-list/patients-list.compoment';
import { PatientsDetailComponent } from './containers/patients-detail/patients-detail.component';

const routes: Routes = [
	{
		path: '',
		component: PatientsListComponent,
		canActivate: [DummyGuard],
		data: { allowedAuth: ['doctor', 'clinic-admin', 'super-admin'] }
	},
	{
		path: ':id',
		component: PatientsDetailComponent,
		canActivate: [DummyGuard],
		data: { allowedAuth: ['doctor', 'clinic-admin', 'super-admin'] }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PatientsRoutingModule { }
