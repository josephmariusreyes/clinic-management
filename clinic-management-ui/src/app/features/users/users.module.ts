import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { HlmInputImports } from '../../shared/spartan-ui/input/src';
import { HlmButtonImports } from '../../shared/spartan-ui/button/src';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        ...HlmInputImports,
        ...HlmButtonImports
    ]
})
export class UsersModule { }
