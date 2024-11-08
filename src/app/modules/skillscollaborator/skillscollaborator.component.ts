import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-skillscollaborator',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, FooterComponent],
  templateUrl: './skillscollaborator.component.html',
  styleUrls: ['./skillscollaborator.component.scss'],
})
export class SkillscollaboratorComponent implements OnInit {
  skillsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializa el formulario con validaciones
    this.skillsForm = this.fb.group({
      materia: ['', Validators.required],
      experiencia: ['', Validators.required],
      informacion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Aquí podrías hacer otras inicializaciones si es necesario
  }

  onSubmit() {
    // Verifica si el formulario es válido antes de realizar cualquier acción
    if (this.skillsForm.valid) {
      console.log(this.skillsForm.value);
    } else {
      console.log("El formulario no es válido");
    }
  }
}
