import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userRole: string | null = '';

  constructor(private router: Router) {
    this.userRole = localStorage.getItem('userRole'); // Obtener el rol del localStorage
    this.redirectBasedOnRole();
  }

  redirectBasedOnRole() {
    if (this.userRole) {
      switch (this.userRole.toUpperCase()) {
        case 'INQUILINO':
          this.router.navigate(['/inquilino/gestion-agenda']);
          break;
        case 'ANFITRION':
          this.router.navigate(['/anfitrion/gestion-agenda']);
          break;
        case 'ADMIN':
          this.router.navigate(['/admin/gestion-agenda']);
          break;
        default:
          this.router.navigate(['/']); // Redirigir a la página de inicio o a un error
          break;
      }
    }
  }
}