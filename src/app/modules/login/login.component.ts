import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Necesitamos Router para la redirección
import { AuthService } from '../../services/auth-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,  // Inyectamos el servicio
    private router: Router             // Inyectamos Router para redirigir
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Llamamos al servicio para hacer la autenticación
      this.authService.login(username, password).subscribe(
        (response) => {
          // Si la autenticación es exitosa, guardamos el token (si es necesario)
          localStorage.setItem('token', response.token);  // Asumiendo que la API devuelve un token

          // Aquí redirigimos dependiendo del tipo de usuario
          if (response.role === 'admin') {
            // Redirigir a la página del administrador
            this.router.navigate(['/admin']);
          } else {
            // Redirigir al usuario normal
            this.router.navigate(['/dashboard']);
          }
        },
        (error) => {
          console.error('Error en el inicio de sesión', error);
          // Manejo de errores (por ejemplo, mostrar un mensaje de error)
        }
      );
    }
  }
}
