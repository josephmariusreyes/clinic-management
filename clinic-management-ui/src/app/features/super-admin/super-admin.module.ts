import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { AdminDashboardComponent } from './containers/admin-dashboard/admin-dashboard.component';

@NgModule({
	declarations: [AdminDashboardComponent],
	imports: [
		CommonModule,
		SuperAdminRoutingModule
	]
})
export class SuperAdminModule { }
