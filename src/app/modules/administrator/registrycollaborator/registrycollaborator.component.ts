import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrycollaborator',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registrycollaborator.component.html',
  styleUrls: ['./registrycollaborator.component.scss'],
})
export class RegistrycollaboratorComponent {
  collaboratorForm: FormGroup;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;
  errorMessage: string = '';

  // URL del API (a cambiar si es necesario)
  private apiUrl = 'http://localhost:8000/registrar/';  // Cambiar esta URL por tu URL real del backend

  constructor(private fb: FormBuilder, private http: HttpClient) {
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
      const formData = this.collaboratorForm.value;

      // Enviar los datos al backend utilizando la URL del API
      this.http.post(this.apiUrl, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        dedication: formData.dedication,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        tipo: 'colaborador', // Asumimos que "colaborador" es el tipo de usuario
      }).subscribe(
        (response) => {
          // Si la solicitud es exitosa
          this.showSuccessMessage = true;
          this.showErrorMessage = false;
          this.errorMessage = '';
          console.log(response); // Aquí puedes ver la respuesta exitosa
        },
        (error) => {
          // Manejo de errores
          this.showSuccessMessage = false;
          this.showErrorMessage = true;

          if (error.error.detail === 'El correo ya está registrado.') {
            this.errorMessage = 'El correo ya está registrado. Por favor, utiliza otro.';
          } else {
            this.errorMessage = 'Ha ocurrido un error. Intenta de nuevo más tarde.';
          }
          console.error(error); // Aquí se loguea el error completo
        }
      );
    }
  }
}
