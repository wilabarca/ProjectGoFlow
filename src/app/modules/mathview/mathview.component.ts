import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-mathview',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './mathview.component.html',
  styleUrl: './mathview.component.scss'
})
export class MathviewComponent {

}
