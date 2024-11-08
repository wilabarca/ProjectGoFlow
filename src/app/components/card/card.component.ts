import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string | null = null; // URL de la imagen principal
  @Input() route: string = ''; // Nueva propiedad para la ruta

  constructor(private router: Router){}

  navigate(){
     this.router.navigate([this.route])
  }
}
