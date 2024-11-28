import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  isMenuVisible = false;
  isModalVisible = false;

  goToNewView(): void {
    this.router.navigate(['/Taksboard']);
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  toggleModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }

  viewProfile(): void {
    this.router.navigate(['/userprofile']);
    this.toggleModal();
  }


  logout(): void {
    console.log('Logging out');
    this.router.navigate(['/login']);
    this.toggleModal();
  }
}
