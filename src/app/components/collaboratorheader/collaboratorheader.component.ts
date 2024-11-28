import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collaboratorheader',
  standalone: true,
  imports: [],
  templateUrl: './collaboratorheader.component.html',
  styleUrls: ['./collaboratorheader.component.scss']
})
export class CollaboratorHeaderComponent {
  constructor(private router: Router) {}

  isMenuVisible = false;
  isModalVisible = false;

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
