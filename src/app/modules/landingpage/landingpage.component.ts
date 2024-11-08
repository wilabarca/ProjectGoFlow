import { Component, HostListener } from '@angular/core';
import { ProfileComponent } from "../../components/profile/profile.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [ProfileComponent, FooterComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  isMenuOpen = false;
  isMobile = false;

  constructor() {
    this.updateMobileStatus();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateMobileStatus();
  }

  updateMobileStatus() {
    this.isMobile = window.innerWidth < 768; // Cambia este valor según tus necesidades
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
