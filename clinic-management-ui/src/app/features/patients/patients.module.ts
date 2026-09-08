import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.modules';
import { PatientsListComponent } from './containers/patients-list/patients-list.compoment';
import { PatientsDetailComponent } from './containers/patients-detail/patients-detail.component';

@NgModule({
	declarations: [
		PatientsListComponent,
		PatientsDetailComponent
	],
	imports: [
		CommonModule,
		PatientsRoutingModule
	]
})
export class PatientsModule { }
