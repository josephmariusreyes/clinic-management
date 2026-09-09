import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login-form',
    standalone: false,
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
    @Input({ required: true }) loginForm!: FormGroup;
    @Output() submitted = new EventEmitter<void>();

    submit(): void {
        this.submitted.emit();
    }
}
