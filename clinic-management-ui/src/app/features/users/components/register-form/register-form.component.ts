import { Component, input, output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-register-form',
    standalone: false,
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
    readonly registerForm = input.required<FormGroup>();
    readonly submitted = output<void>();

    submit(): void {
        this.submitted.emit();
    }
}
