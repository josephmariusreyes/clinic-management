import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DummyGuard } from '../../core/route-guard/dummy.guard';
import { AdminDashboardComponent } from './containers/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
	{
		path: '',
		component: AdminDashboardComponent,
		canActivate: [DummyGuard],
		data: { allowedAuth: ['super-admin'] }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
