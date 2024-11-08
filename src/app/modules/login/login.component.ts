import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Corrige 'styleUrl' a 'styleUrls'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializa el formulario con controles y validaciones
    this.loginForm = this.fb.group({
      username: ['', Validators.required], // Campo para el usuario
      password: ['', Validators.required]  // Campo para la contraseña
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Usuario:', username);
      console.log('Contraseña:', password);
      // Aquí puedes agregar la lógica para autenticar al usuario
    }
  }
}
