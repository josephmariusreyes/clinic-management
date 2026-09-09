import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HlmInputImports } from '../../shared/spartan-ui/input/src';
import { HlmButtonImports } from '../../shared/spartan-ui/button/src';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        LoginFormComponent,
        RegisterFormComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        ReactiveFormsModule,
        ...HlmInputImports,
        ...HlmButtonImports
    ]
})
export class UsersModule { }
