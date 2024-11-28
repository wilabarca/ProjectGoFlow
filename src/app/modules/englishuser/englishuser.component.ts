import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ProfilecontributorComponent } from "../../components/profilecontributor/profilecontributor.component";

@Component({
  selector: 'app-englishuser',
  standalone: true,
  imports: [HeaderComponent, ProfilecontributorComponent],
  templateUrl: './englishuser.component.html',
  styleUrl: './englishuser.component.scss'
})
export class EnglishuserComponent {
handleQuote() {
throw new Error('Method not implemented.');
}

}
