import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-taksboard',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './taksboard.component.html',
  styleUrl: './taksboard.component.scss'
})
export class TaksboardComponent {

}
