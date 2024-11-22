import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservaService } from 'src/app/service/reserva.service';
import { HospedajeService } from 'src/app/service/hospedaje.service';
import { ReservaDTO } from 'src/app/models/reserva.model';
import { HospedajeDTO } from 'src/app/models/hospedaje.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservar-hospedaje',
  templateUrl: './reservar-hospedaje.component.html',
  styleUrls: ['./reservar-hospedaje.component.css']
})
export class ReservarHospedajeComponent implements OnInit {
  reservaForm: FormGroup;
  hospedajes: HospedajeDTO[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private reservaService: ReservaService,
    private hospedajeService: HospedajeService,
    private snackBar: MatSnackBar
  ) {
    this.reservaForm = this.fb.group({
      idHospedaje: ['', Validators.required],
      fechaCheckIn: ['', Validators.required],
      fechaCheckOut: ['', Validators.required],
      cantAdultos: [1, [Validators.required, Validators.min(1)]],
      cantNinos: [0, [Validators.required, Validators.min(0)]],
      cantBebes: [0, [Validators.required, Validators.min(0)]],
      cantMascotas: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {
    this.hospedajeService.obtenerTodosHospedajes().subscribe(hospedajes => {
      this.hospedajes = hospedajes;
    });
  }

  onSubmit() {
    if (this.reservaForm.valid) {
      const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
      const userId = usuario.id;
  
      if (!userId) {
        this.snackBar.open('Error: Usuario no encontrado', 'Cerrar', {
          duration: 3000
        });
        return;
      }
  
      const reservaDTO: ReservaDTO = {
        idHospedaje: this.reservaForm.value.idHospedaje,
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