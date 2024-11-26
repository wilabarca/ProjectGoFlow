import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrycollaborator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registrycollaborator.component.html',
  styleUrls: ['./registrycollaborator.component.scss'],
})
export class RegistrycollaboratorComponent {
  collaboratorForm: FormGroup;
  showSuccessMessage: boolean = false;

  constructor(private fb: FormBuilder) {
    this.collaboratorForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dedication: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  get formControls() {
    return this.collaboratorForm.controls;
  }

  submitForm() {
    if (this.collaboratorForm.valid) {
      
      console.log(this.collaboratorForm.value);
      this.showSuccessMessage = true;
    }
  }
}
