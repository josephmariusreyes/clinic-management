import { Component, input, output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login-form',
    standalone: false,
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
    readonly loginForm = input.required<FormGroup>();
    readonly submitted = output<void>();

    submit(): void {
        this.submitted.emit();
    }
}
