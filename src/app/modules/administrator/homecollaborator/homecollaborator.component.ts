import { Component } from '@angular/core';
import { CollaboratorHeaderComponent } from "../../../components/collaboratorheader/collaboratorheader.component";
import { ProfilecontributorComponent } from "../../../components/profilecontributor/profilecontributor.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { ChatsIAComponent } from "../../../components/Chatbot/chats-ia.component";

@Component({
  selector: 'app-homecollaborator',
  standalone: true,
  imports: [CollaboratorHeaderComponent, ProfilecontributorComponent, FooterComponent, ChatsIAComponent],
  templateUrl: './homecollaborator.component.html',
  styleUrl: './homecollaborator.component.scss'
})
export class HomecollaboratorComponent {
handleQuote() {
throw new Error('Method not implemented.');
}

}
