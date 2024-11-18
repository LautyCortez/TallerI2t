import { Component } from '@angular/core';
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
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']); 
    }
  }

  logout() {
    localStorage.clear
    this.router.navigate(['/login']);

  }

  home() {
    this.router.navigate(['/home']);
    localStorage.clear
  }
}
