import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userRole: string | null = '';

  constructor() {
    this.userRole = localStorage.getItem('userRole'); // Obtener el rol del localStorage
  }

  // Método para determinar el contenido a mostrar
  getContentBasedOnRole() {
    switch (this.userRole) {
      case 'inquilino':
        return 'Contenido para inquilinos';
      case 'anfitrion':
        return 'Contenido para anfitriones';
      case 'admin':
        return 'Contenido para administradores';
      default:
        return 'Contenido por defecto';
    }
  }

}
