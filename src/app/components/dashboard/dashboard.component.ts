import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userRole: string | null = '';
  usuario: Usuario | null = null;

  constructor(private router: Router, private authService: AuthService) {
    this.usuario = this.authService.getCurrentUser(); // Obtener el usuario actual
    this.userRole = this.authService.getUserRole(); // Obtener el rol del localStorage
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']); // Redirigir a login si no está logueado
    }
  }
}