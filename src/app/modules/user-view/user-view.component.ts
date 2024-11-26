import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ChatsIAComponent } from "../../components/Chatbot/chats-ia.component";

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ChatsIAComponent],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.scss'
})
export class UserViewComponent {

}
