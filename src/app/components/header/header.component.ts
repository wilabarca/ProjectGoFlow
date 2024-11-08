import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuVisible = false; // Estado del menú

  // Función para alternar la visibilidad del menú
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    const nav = document.querySelector('.nav') as HTMLElement;
    if (nav) {
      nav.classList.toggle('active', this.isMenuVisible);
    }
  }
}
