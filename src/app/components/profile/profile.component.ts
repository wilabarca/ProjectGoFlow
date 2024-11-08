import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() imageUrl: string = ''; 
  @Input() name: string = '';
  @Input() testimonial: string = '';
}
