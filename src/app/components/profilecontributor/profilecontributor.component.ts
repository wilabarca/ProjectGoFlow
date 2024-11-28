import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilecontributor',
  standalone: true,
  templateUrl: './profilecontributor.component.html',
  styleUrls: ['./profilecontributor.component.scss']
})
export class ProfilecontributorComponent {
  @Input() name: string = '';
  @Input() expertise: string = '';
  @Input() information: string = '';
  @Output() quote = new EventEmitter<void>();
  constructor(private router: Router) { }

  onQuote(): void {
    this.router.navigate(['/Chatcollaborator']); 
  }

}
