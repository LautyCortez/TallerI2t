// src/app/components/administrador/alta-servicio/alta-servicio.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-alta-servicio',
  templateUrl: './alta-servicio.component.html',
  styleUrls: ['./alta-servicio.component.css']
})
export class AltaServicioComponent {
  servicioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicioService: ServicioService,
    private snackBar: MatSnackBar
  ) {
    this.servicioForm = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.servicioForm.valid) {
      const nuevoServicio = this.servicioForm.value;
      this.servicioService.crearServicio(nuevoServicio).subscribe({
        next: () => {
          this.snackBar.open('Servicio creado con éxito', 'Cerrar', {
            duration: 3000
          });
          this.servicioForm.reset(); // Reiniciar el formulario
        },
        error: () => {
          this.snackBar.open('Error al crear el servicio', 'Cerrar', {
            duration: 3000
          });
        }
      });
    }
  }
}