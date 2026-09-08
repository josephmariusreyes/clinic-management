import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsListComponent } from './containers/doctors-list/doctors-list.component';
import { DoctorsDetailComponent } from './containers/doctors-detail/doctors-list.component';

@NgModule({
    declarations: [
        DoctorsListComponent,
        DoctorsDetailComponent
    ],
    imports: [
        CommonModule,
        DoctorsRoutingModule
    ]
})
export class DoctorsModule { }