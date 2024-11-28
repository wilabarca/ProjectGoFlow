import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';  // Asegúrate de importar Router
import { ProfileComponent } from "../../components/profile/profile.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [ProfileComponent, FooterComponent],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {
  isMenuOpen = false;
  isMobile = false;

  constructor(private router: Router) {
    this.updateMobileStatus();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateMobileStatus();
  }

  updateMobileStatus() {
    this.isMobile = window.innerWidth < 768;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateToLogin(): void {
    this.router.navigate(['/RegisterUser']);
  }
  navigateToRegisterUser() : void{
    this.router.navigate(['/Registrycollaborator']);
  }
}
