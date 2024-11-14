import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    {
      // Si ya está logueado, redirigir al dashboard
      if (this.authService.isLoggedIn()) {
        this.router.navigate(['/dashboard']);
      }
    }
  }

  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.usuarioService.login(username, password).subscribe({
        next: (response) => {
          console.log(response); 
          if (response.token) {
            localStorage.clear(); // Limpiar todo el localStorage
            localStorage.setItem('token', response.token);
            if (response.tipoUsuarios && response.tipoUsuarios.length > 0) {
              const userRole = response.tipoUsuarios[0].nombre.toUpperCase();
              localStorage.setItem('userRole', userRole);
               // Guardar el rol en localStorage
              this.router.navigate(['/dashboard']); // Redirigir al dashboard
            }
          } else {
            alert('Credenciales incorrectas');
          }
        },
        error: err => {
          console.error(err);
          alert('Error en el login');
        }
      });
    }
  }
}



/* login() {
  if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.usuarioService.login(username, password).subscribe({
          next: (response) => {
              console.log(response); 
              if (response.token) {
                  localStorage.clear(); // Limpiar todo el localStorage
                  localStorage.setItem('token', response.token);
                  if (response.tipoUsuarios && response.tipoUsuarios.length > 0) {
                      const userRole = response.tipoUsuarios[0].nombre.toUpperCase();
                      localStorage.setItem('userRole', userRole);
                      localStorage.setItem('usuario', response.nombre); // Guardar el nombre del usuario
                      this.router.navigate(['/dashboard']); // Redirigir al dashboard
                  }
              } else {
                  alert('Credenciales incorrectas');
              }
          },
          error: err => {
              console.error(err);
              alert('Error en el login');
          }
      });
  }
} */