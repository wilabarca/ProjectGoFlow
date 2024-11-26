import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-administratorview',
  standalone: true,
  imports: [HeaderComponent, CardComponent, FooterComponent],
  templateUrl: './administratorview.component.html',
  styleUrls: ['./administratorview.component.scss']
})
export class AdministratorviewComponent {

}
