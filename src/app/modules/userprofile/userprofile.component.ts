import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports:[HeaderComponent],
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user = {
    firstName: 'Juan',
    lastName: 'Pérez',
    email: 'juan.perez@example.com',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  }
}
