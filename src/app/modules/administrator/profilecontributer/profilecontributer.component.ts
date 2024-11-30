import { Component } from '@angular/core';
import { CollaboratorHeaderComponent } from "../../../components/collaboratorheader/collaboratorheader.component";

@Component({
  selector: 'app-profilecontributer',
  standalone: true,
  imports: [CollaboratorHeaderComponent],
  templateUrl: './profilecontributer.component.html',
  styleUrl: './profilecontributer.component.scss'
})
export class ProfilecontributerComponent {

}
