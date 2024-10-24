import { Component } from '@angular/core';
import { UsuariosModule } from 'src/app/models/usuarios/usuarios.module';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent {
  usuario: UsuariosModule = new usuario();

  registrar() {
    console.log('Registrando usuario:', this.usuario);
    // Lógica para registrar al usuario en el backend
  }
}
