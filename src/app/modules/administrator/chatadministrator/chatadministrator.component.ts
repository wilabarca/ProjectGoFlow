
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-chatadministrator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent, FooterComponent],
  templateUrl: './chatadministrator.component.html',
  styleUrls: ['./chatadministrator.component.scss'],
})
export class ChatAdministratorComponent implements OnInit, OnDestroy {
  adminName: string = 'Administrador';
  chatForm: FormGroup;
  messages: { user: string; text: string; timestamp: string }[] = [];
  private socket$: WebSocketSubject<any> | undefined;

  constructor(private fb: FormBuilder) {
    this.chatForm = this.fb.group({
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Inicialización de WebSocket
    this.socket$ = webSocket('ws://localhost:8080'); // Reemplazar con la URL de tu servidor WebSocket

    // Suscripción al flujo de WebSocket
    this.socket$.subscribe(
      (data) => {
        try {
          // Intentar parsear el mensaje si es un JSON
          const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
          if (parsedData && parsedData.type === 'new_message') {
            const timestamp = new Date().toLocaleTimeString();
            this.messages.push({
              user: parsedData.user,
              text: parsedData.message,
              timestamp: parsedData.timestamp || timestamp,
            });
          }
        } catch (error) {
          // Si no es un JSON válido, manejarlo como texto simple
          this.messages.push({
            user: 'Sistema',
            text: data, // Mensaje no parseado, solo como texto
            timestamp: new Date().toLocaleTimeString(),
          });
        }
      },
      (err) => console.error('Error con el WebSocket:', err),
      () => console.log('Conexión terminada')
    );
  }

  ngOnDestroy(): void {
    // Cerrar la conexión WebSocket al destruir el componente
    if (this.socket$) {
      this.socket$.complete();
    }
  }

  sendMessage() {
    if (this.chatForm.valid) {
      const message = this.chatForm.value.message.trim();
      if (message) {
        this.chatForm.reset();

        // Enviar mensaje al servidor a través de WebSocket
        if (this.socket$) {
          const timestamp = new Date().toLocaleTimeString();
          this.socket$.next({ type: 'new_message', user: this.adminName, message, timestamp });
        }
      }
    }
  }
  private reconnectSocket() {
    if (this.socket$ && this.socket$.closed) {
      console.log('Reconectando al servidor WebSocket...');
      this.ngOnInit(); // Vuelve a inicializar el WebSocket
    }
  }

  logout() {
    console.log('Administrador ha cerrado sesión');
    alert('Administrador ha cerrado sesión');
  }
}
