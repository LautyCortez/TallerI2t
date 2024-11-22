import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicioService } from 'src/app/service/servicio.service';
import { Servicio } from 'src/app/models/servicio.model';

@Component({
  selector: 'app-modificacion-servicio',
  templateUrl: './modificacion-servicio.component.html',
  styleUrls: ['./modificacion-servicio.component.css']
})
export class ModificacionServicioComponent implements OnInit {
  servicios: Servicio[] = [];
  servicioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicioService: ServicioService,
    private snackBar: MatSnackBar
  ) {
    this.servicioForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.cargarServicios();
  }

  cargarServicios() {
    this.servicioService.obtenerServicios().subscribe({
      next: (data) => {
        this.servicios = data;
      },
      error: (error) => {
        this.snackBar.open('Error al cargar servicios', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }

  onSubmit() {
    if (this.servicioForm.valid) {
      const servicio = this.servicioForm.value;
      this.servicioService.editarServicio(servicio.id, servicio).subscribe({
        next: () => {
          this.snackBar.open('Servicio modificado con éxito', 'Cerrar', {
            duration: 3000
          });
          this.cargarServicios();
          this.servicioForm.reset();
        },
        error: () => {
          this.snackBar.open('Error al modificar el servicio', 'Cerrar', {
            duration: 3000
          });
        }
      });
    }
  }

  seleccionarServicio(servicio: Servicio) {
    this.servicioForm.patchValue({
      id: servicio.id,
      nombre: servicio.nombre,
      descripcion: servicio.descripcion
    });
  }
}