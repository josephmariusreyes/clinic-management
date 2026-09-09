import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

function passwordsMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
}

@Component({
    selector: 'app-register',
    standalone: false,
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    private readonly formBuilder = inject(FormBuilder);

    readonly registerForm = this.formBuilder.nonNullable.group(
        {
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/)]],
            confirmPassword: ['', Validators.required]
        },
        { validators: passwordsMatch }
    );

    onSubmit(): void {
        if (this.registerForm.invalid) {
            this.registerForm.markAllAsTouched();
            return;
        }

        alert(JSON.stringify(this.registerForm.getRawValue()));
    }
}
