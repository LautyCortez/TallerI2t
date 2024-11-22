import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicioService } from 'src/app/service/servicio.service';
import { Servicio } from 'src/app/models/servicio.model';

@Component({
  selector: 'app-eliminacion-servicio',
  templateUrl: './eliminacion-servicio.component.html',
  styleUrls: ['./eliminacion-servicio.component.css']
})
export class EliminacionServicioComponent implements OnInit {
  servicios: Servicio[] = [];

  constructor(
    private servicioService: ServicioService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.cargarServicios();
  }

  cargarServicios() {
    this.servicioService.obtenerServicios().subscribe({
      next: (data) => {
        this.servicios = data;
      },
      error: () => {
        this.snackBar.open('Error al cargar servicios', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }

  eliminarServicio(id: number) {

/* Se elimina de la base de datos pero en el la alerta dice error. */

    if (confirm('¿Está seguro que desea eliminar este servicio?')) {
      this.servicioService.eliminarServicio(id).subscribe({
        next: () => {
          this.snackBar.open('Servicio eliminado con éxito', 'Cerrar', {
            duration: 3000
          });
          this.cargarServicios();
        },
        error: () => {
          this.snackBar.open('Error al eliminar el servicio', 'Cerrar', {
            duration: 3000
          });
        }
      });
    }
  }
}

