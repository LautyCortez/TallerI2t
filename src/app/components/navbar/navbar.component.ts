import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userRole: string | null = '';
  user: string | null = null; 



  constructor(
    private router: Router, 
    private authService: AuthService,
  ) {
    this.user = localStorage.getItem('usuario'); 
    this.userRole = this.authService.getUserRole(); 
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
