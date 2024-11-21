import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservaService } from 'src/app/service/reserva.service';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-reservar-hospedaje',
  templateUrl: './reservar-hospedaje.component.html',
  styleUrls: ['./reservar-hospedaje.component.css']
})
export class ReservarHospedajeComponent implements OnInit {
  reservaForm: FormGroup;
  servicios: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private reservaService: ReservaService,
    private servicioService: ServicioService
  ) {
    this.reservaForm = this.fb.group({
      checkin: ['', Validators.required],
      checkout: ['', Validators.required],
      adultos: [1, Validators.required],
      ninos: [0],
      bebes: [0],
      mascotas: [0],
      servicios: [[]]
    });
  }

  ngOnInit() {
    this.loadServicios();
  }

  loadServicios() {
    this.servicioService.obtenerServicios().subscribe(data => {
      this.servicios = data;
    });
  }

  onSubmit() {
    if (this.reservaForm.valid) {
      const reservaData = {
        idHospedaje: 1, // Reemplaza con el ID real del hospedaje
        idUsuario: 1, // Reemplaza con el ID real del usuario
        fechaCheckIn: this.reservaForm.value.checkin,
        fechaCheckOut: this.reservaForm.value.checkout,
        cantNinos: this.reservaForm.value.ninos,
        cantAdultos: this.reservaForm.value.adultos,
        cantBebes: this.reservaForm.value.bebes,
        cantMascotas: this.reservaForm.value.mascotas,
        importeTotal: 0 // Calcula el importe total si es necesario
      };

      this.reservaService.crearReserva(reservaData).subscribe({
        next: (response) => {
          console.log('Reserva creada:', response);
          alert('Reserva creada con éxito');
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Error al crear la reserva:', error);
          alert('Error al crear la reserva');
        }
      });
    }};
}
