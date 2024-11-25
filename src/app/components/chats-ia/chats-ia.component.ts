
import { CommonModule } from '@angular/common';
import { ChatsIAService } from './../../services/chats-ia.service';
import { Component, inject } from '@angular/core';
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
  chatsIAService: ChatsIAService = inject(ChatsIAService);
  loading: boolean = false;
  chatHistory: any[] = [];

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
}
