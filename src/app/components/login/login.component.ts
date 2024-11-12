import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private usuarioService: UsuarioService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.usuarioService.login(username, password).subscribe({
        next: (response) => {
        console.log(response); // Log the response for debugging
        if (response.token) {
          console.log(response);
          localStorage.setItem('token', response.token);
          // localStorage.setItem('userRole', response.role);
          this.router.navigate(['/dashboard']);
        } else {
          alert('Credenciales incorrectas');
        }
      }, error: err => {
        console.error(err); // Log any error for debugging
        alert('Error en el login');
      }})
    };
  }
}