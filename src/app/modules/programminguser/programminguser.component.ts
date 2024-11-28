import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ProfilecontributorComponent } from '../../components/profilecontributor/profilecontributor.component';
import { FooterComponent } from "../../components/footer/footer.component";
@Component({
  selector: 'app-programminguser',
  standalone: true,
  imports: [HeaderComponent, ProfilecontributorComponent, FooterComponent],
  templateUrl: './programminguser.component.html',
  styleUrl: './programminguser.component.scss'
})
export class ProgramminguserComponent {
handleQuote() {
throw new Error('Method not implemented.');
}

}
