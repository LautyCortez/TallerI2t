import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userRole: string | null = '';
  user: string | null = null; 
  hideNavbar: boolean = false;


  constructor(
    private router: Router, 
    private authService: AuthService,
  ) {
    this.user = localStorage.getItem('usuario'); 
    this.userRole = this.authService.getUserRole(); 

    // Suscribirse a los cambios de ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Rutas donde queremos ocultar el navbar
        const hiddenRoutes = ['/login', '/home', '/registro'];
        this.hideNavbar = hiddenRoutes.includes(event.url);
      }
    });

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  home() {
    this.router.navigate(['/dashboard']);
  }

  irAEditarMisDatos(){
    this.router.navigate(['/editar-mis-datos']);
  }

  ngOnInit() {
  this.authService.getUserRole
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); 
}
}
