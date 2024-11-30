import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebSocketService } from '../../services/chatwebsocke.service';
import { HeaderComponent } from "../../components/header/header.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
})
export class ChatUserComponent implements OnInit {
  userName: string = 'Usuario';
  chatForm: FormGroup;
  messages: { user: string; text: string }[] = [];
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private webSocketService: WebSocketService
  ) {
    this.chatForm = this.fb.group({
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.webSocketService.getMessages().subscribe({
      next: (data) => {
        if (data.type === 'new_message') {
          this.messages.push({ user: data.user, text: data.message });
        } else if (data.type === 'raw') {
          this.messages.push({ user: 'Sistema', text: data.message });
        }
      },
      error: (err) => {
        this.errorMessage = 'Error al recibir mensajes del servidor.';
        console.error('Error recibiendo mensajes:', err);
      },
    });
  }

  sendMessage(): void {
    if (this.chatForm.valid) {
      const message = this.chatForm.value.message.trim();
      if (message) {
        const msgPayload = {
          type: 'new_message',
          user: this.userName,
          message,
        };

        try {
          this.webSocketService.sendMessage(msgPayload);
          this.chatForm.reset();
          this.errorMessage = '';
        } catch (err) {
          this.errorMessage = 'Error al enviar el mensaje.';
          console.error('Error enviando mensaje:', err);
        }
      }
    } else {
      this.errorMessage = 'Por favor, ingrese un mensaje válido.';
    }
  }

  logout(): void {
    console.log('Usuario ha salido del chat');
  }
}
