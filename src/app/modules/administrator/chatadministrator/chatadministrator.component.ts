import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from "../../../components/footer/footer.component";
@Component({
  selector: 'app-chatadministrator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent, FooterComponent],
  templateUrl: './chatadministrator.component.html',
  styleUrls: ['./chatadministrator.component.scss'],
})
export class ChatAdministratorComponent implements OnInit {
  adminName: string = 'Administrador';
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
      this.messages.push({ user: this.adminName, text: message });
      this.chatForm.reset(); 
    }
  }

  logout() {
    console.log('Administrador ha cerrado sesión');
  }
}
