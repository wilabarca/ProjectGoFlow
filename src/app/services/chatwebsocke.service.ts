import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:8080');
  }

  // Método para enviar mensajes al servidor
  sendMessage(message: { type: string; user: string; message: string }): void {
    if (this.socket$) {
      this.socket$.next(message);
    } else {
      console.error('WebSocket connection is not established.');
    }
  }


  // Método para recibir mensajes del servidor
  getMessages(): Observable<any> {
    return this.socket$;
  }

  // Método para cerrar la conexión
  closeConnection(): void {
    this.socket$.complete();
  }
}
