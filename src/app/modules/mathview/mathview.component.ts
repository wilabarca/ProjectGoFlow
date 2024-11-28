import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProfilecontributorComponent } from "../../components/profilecontributor/profilecontributor.component";

@Component({
  selector: 'app-mathview',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProfilecontributorComponent],
  templateUrl: './mathview.component.html',
  styleUrl: './mathview.component.scss'
})
export class MathviewComponent {
handleQuote() {
throw new Error('Method not implemented.');
}

}
