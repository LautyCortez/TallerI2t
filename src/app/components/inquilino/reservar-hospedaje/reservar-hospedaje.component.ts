import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservaService } from 'src/app/service/reserva.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { ReservaDTO } from 'src/app/models/reserva.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservar-hospedaje',
  templateUrl: './reservar-hospedaje.component.html',
  styleUrls: ['./reservar-hospedaje.component.css']
})
export class ReservarHospedajeComponent implements OnInit {
  reservaForm: FormGroup;
  servicios: any[] = [];
  idHospedaje: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private reservaService: ReservaService,
    private servicioService: ServicioService,
    private snackBar: MatSnackBar,
    private servicio: ServicioService
  ) {
    this.reservaForm = this.fb.group({
      fechaCheckIn: ['', Validators.required],
      fechaCheckOut: ['', Validators.required],
      cantAdultos: [1, [Validators.required, Validators.min(1)]],
      cantNinos: [0, [Validators.required, Validators.min(0)]],
      cantBebes: [0, [Validators.required, Validators.min(0)]],
      cantMascotas: [0, [Validators.required, Validators.min(0)]],
      servicios: [[]]
    });
  }

  ngOnInit() {
    this.servicio.obtenerServicios();
    // Obtener el ID del hospedaje de los parámetros de la ruta
    this.route.params.subscribe(params => {
      this.idHospedaje = +params['id'];
    });
  }

  onSubmit() {
    if (this.reservaForm.valid) {
      const userId = Number(localStorage.getItem('userId'));
      
      const reservaDTO: ReservaDTO = {
        idHospedaje: this.idHospedaje,
        idUsuario: userId,
        fechaCheckIn: this.reservaForm.value.fechaCheckIn,
        fechaCheckOut: this.reservaForm.value.fechaCheckOut,
        cantNinos: this.reservaForm.value.cantNinos,
        cantAdultos: this.reservaForm.value.cantAdultos,
        cantBebes: this.reservaForm.value.cantBebes,
        cantMascotas: this.reservaForm.value.cantMascotas,
        importeTotal: 0 // Este valor se calculará en el backend
      };

      this.reservaService.crearReserva(reservaDTO).subscribe({
        next: (response) => {
          this.snackBar.open('Reserva creada con éxito', 'Cerrar', {
            duration: 3000
          });
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          let mensaje = 'Error al crear la reserva';
          if (error.status === 409) {
            mensaje = 'El hospedaje no está disponible para las fechas seleccionadas';
          }
          this.snackBar.open(mensaje, 'Cerrar', {
            duration: 3000
          });
        }
      });
    }
  }
}