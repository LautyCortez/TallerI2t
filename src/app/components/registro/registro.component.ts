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
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fecha_nacimiento: [''],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')]],
      tipoUsuarios: ['', Validators.required]
    });
  }

  registrar() {
    if (this.registroForm.valid) {
      const formValue = this.registroForm.value;
      formValue.tipoUsuarios = [{ id: formValue.tipoUsuarios }]; // Convert to array of objects with id
  
      this.usuarioService.register(formValue).subscribe(response => {
        console.log(response); // Log the response for debugging
        if (response.token) {
          alert('Registro exitoso');
          this.router.navigate(['/login']);
        } else {
          alert('Error en el registro');
        }
      }, error => {
        console.error(error); // Log any error for debugging
        alert('Error en el registro');
      });
    }
  }
}