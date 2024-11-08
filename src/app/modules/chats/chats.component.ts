import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent], // Importa ReactiveFormsModule aquí
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatComponent implements OnInit {
  userName: string = 'Usuario'; // Nombre del usuario
  chatForm: FormGroup; // Formulario reactivo
  messages: { user: string; text: string }[] = []; // Mensajes del chat

  constructor(private fb: FormBuilder) {
    this.chatForm = this.fb.group({
      message: ['', Validators.required], // Control del mensaje
    });
  }

  ngOnInit(): void {}

  sendMessage() {
    if (this.chatForm.valid) {
      const message = this.chatForm.value.message; // Obtener el mensaje del formulario
      this.messages.push({ user: this.userName, text: message }); // Agregar el mensaje a la lista
      this.chatForm.reset(); // Reiniciar el formulario
    }
  }

  logout() {
    console.log('Usuario ha salido del chat'); // Lógica para cerrar sesión
  }
}
