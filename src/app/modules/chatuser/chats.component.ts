import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatUserComponent implements OnInit {
  userName: string = 'Usuario';
  chatForm: FormGroup;
  messages: { user: string; text: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.chatForm = this.fb.group({
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  sendMessage() {
    if (this.chatForm.valid) {
      const message = this.chatForm.value.message;
      this.messages.push({ user: this.userName, text: message });
      this.chatForm.reset();
    }
  }

  logout() {
    console.log('Usuario ha salido del chat');
  }
}
