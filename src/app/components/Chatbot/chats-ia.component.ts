import { Component, inject } from '@angular/core';
import { ChatsIAService } from '../../services/chats-ia.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chats-ia',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chats-ia.component.html',
  styleUrls: ['./chats-ia.component.scss'],
})
export class ChatsIAComponent {
  prompt: string = '';
  loading: boolean = false;
  chatHistory: any[] = [];
  chatVisible: boolean = false;
  bottom: number = 80;
  right: number = 20;

  chatsIAService: ChatsIAService = inject(ChatsIAService);

  constructor() {
    this.chatsIAService.getMessageHistory().subscribe((res: any[]) => {
      if (res) {
        this.chatHistory = res;
      }
    });
  }

  async sendData() {
    if (this.prompt) {
      this.loading = true;
      await this.chatsIAService.generateText(this.prompt);
      this.prompt = '';
      this.loading = false;
    }
  }

  toggleChat() {
    this.chatVisible = !this.chatVisible;
  }

  startDrag(event: MouseEvent) {
    event.preventDefault();
    const initialX = event.clientX;
    const initialY = event.clientY;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - initialX;
      const deltaY = moveEvent.clientY - initialY;

      this.right -= deltaX;
      this.bottom -= deltaY;
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
}
