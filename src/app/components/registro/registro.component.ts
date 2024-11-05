import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private usuarioService: UsuarioService) {
    this.registroForm = this.fb.group({
      nombreApellido: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rol: ['', Validators.required]
    });
  }

  registrar() {
    if (this.registroForm.valid) {
      this.usuarioService.register(this.registroForm.value).subscribe(response => {
        if (response.success) {
          alert('Registro exitoso');
          this.router.navigate(['/login']);
        } else {
          alert('Error en el registro');
        }
      });
    }
  }
}


