import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registeruser',
  standalone: true,
  imports:[ReactiveFormsModule,CommonModule,],
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.scss']
})
export class RegisteruserComponent {
  registerForm: FormGroup;
  showSuccessMessage: boolean = false;
  userAdded: boolean = false;
  private apiUrl = 'http://localhost:8000/registrar';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      tipo: ['usuario']

    });
  }

  get formControls() {
    return this.registerForm.controls;
  }

  // Método para enviar el formulario
  submitForm() {
    if (this.registerForm.valid) {
      // Crear el objeto con los datos del formulario
      const formData = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        confirmPassword: this.registerForm.value.confirmPassword,
        tipo: 'usuario' // Puedes cambiarlo a 'colaborador' según sea necesario
      };

      // Enviar los datos al backend
      this.registrarUsuario(formData).subscribe(
        response => {
          console.log('Usuario registrado con éxito', response);
          this.userAdded = true;
          this.showSuccessMessage = true;

          // Restablecer el formulario después de un tiempo
          setTimeout(() => {
            this.showSuccessMessage = false;
            this.registerForm.reset();
          }, 5000);
        },
        error => {
          console.error('Error al registrar usuario', error);
          this.userAdded = false;
          this.showSuccessMessage = false;
        }
      );
    }
  }

  // Método para hacer la solicitud HTTP al backend
  registrarUsuario(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
