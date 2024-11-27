import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-mathview',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './mathview.component.html',
  styleUrl: './mathview.component.scss'
})
export class MathviewComponent {

}
