import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.scss'
})
export class TaskBoardComponent {
  isModalOpen = false; // Estado de la ventana modal
  taskName = ''; // Nombre de la tarea

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.taskName = ''; // Limpia el campo de texto
  }

  addTask() {
    if (this.taskName.trim()) {
      console.log(`Nueva tarea: ${this.taskName}`);
      // Aquí puedes agregar la lógica para añadir la tarea a una lista
      this.closeModal(); // Cierra la ventana modal
    } else {
      alert('Por favor, escribe un nombre para la tarea.');
    }
  }
}
