import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeruser',
  standalone:true,
  imports:[ReactiveFormsModule],
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.scss']
})
export class RegisteruserComponent {
  registerForm: FormGroup;
  showSuccessMessage: boolean = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  get formControls() {
    return this.registerForm.controls;
  }

  submitForm() {
    if (this.registerForm.valid) {
 
      console.log('Usuario agregado:', this.registerForm.value);
      this.showSuccessMessage = true;

      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    }
  }
}
