import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { 
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';
  rol: string = '';
}
