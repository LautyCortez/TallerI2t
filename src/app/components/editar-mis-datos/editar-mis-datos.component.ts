import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/service/usuario.service';
import { AuthService } from 'src/app/service/auth.service';
import { EditUsuarioDTO } from 'src/app/models/edit-usuariodto.model';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-editar-mis-datos',
  templateUrl: './editar-mis-datos.component.html',
  styleUrls: ['./editar-mis-datos.component.css']
})
export class EditarMisDatosComponent implements OnInit {
  usuarioForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private usuarioService: UsuarioService,
    private authService: AuthService
  ) {
    this.usuarioForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
    /*   telefono: ['', Validators.required] */
    });
  }

  ngOnInit(): void {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario() {
    const usuarioActual = JSON.parse(localStorage.getItem('usuario') || '{}');
    if (usuarioActual) {
      this.usuarioForm.patchValue({
        username: usuarioActual.username,
        email: usuarioActual.email,
        nombre: usuarioActual.nombre,
        apellido: usuarioActual.apellido,
        fecha_nacimiento: usuarioActual.fecha_nacimiento,
/*         telefono: usuarioActual.telefono*/      
});
    } else {
      console.error('No se encontró el usuario actual');
    }
  }

  guardarCambios() {
    if (this.usuarioForm.valid) {
      const editUsuarioDTO: EditUsuarioDTO = {
        username: this.usuarioForm.value.username,
        email: this.usuarioForm.value.email,
        nombre: this.usuarioForm.value.nombre,
        apellido: this.usuarioForm.value.apellido,
        fecha_nacimiento: this.usuarioForm.value.fecha_nacimiento,
      /*   telefono: this.usuarioForm.value.telefono */
      };

      const usuarioId = this.authService.getCurrentUser()?.id;

      if (usuarioId) {
        this.loading = true;
        this.usuarioService.actualizarUsuario(usuarioId, editUsuarioDTO).subscribe({
          next: () => {
            this.loading = false;
            this.mostrarMensaje('Cambios guardados con éxito');
            const usuarioActual = this.authService.getCurrentUser();
            if (usuarioActual) {
              this.authService.saveUser({
                ...usuarioActual,
                ...editUsuarioDTO,
                nombre: usuarioActual.nombre || '',
                apellido: usuarioActual.apellido || ''
              });
            }
          },
          error: (error) => {
            this.loading = false;
            this.mostrarMensaje('Error al guardar los datos');
            console.error(error);
          }
        });
      }
    }
  }

  private mostrarMensaje(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000
    });
  }
}
