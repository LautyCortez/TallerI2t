import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservaService } from 'src/app/service/reserva.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReservaDTO } from 'src/app/models/reserva.model';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-modificar-reserva',
  templateUrl: './modificar-reserva.component.html',
  styleUrls: ['./modificar-reserva.component.css']
})
export class ModificarReservaComponent implements OnInit {
  editarReservaForm: FormGroup;
  reservas: ReservaDTO[] = [];
  selectedReservaId: number | null = null;

  @ViewChild('checkinPicker') checkinPicker!: MatDatepicker<Date>;
  @ViewChild('checkoutPicker') checkoutPicker!: MatDatepicker<Date>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private reservaService: ReservaService,
    private snackBar: MatSnackBar
  ) {
    this.editarReservaForm = this.fb.group({
      fechaCheckIn: ['', Validators.required],
      fechaCheckOut: ['', Validators.required],
      cantAdultos: [1, [Validators.required, Validators.min(1)]],
      cantNinos: [0, [Validators.required, Validators.min(0)]],
      cantBebes: [0, [Validators.required, Validators.min(0)]],
      cantMascotas: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {
    this.cargarReservasUsuario();
  }

  cargarReservasUsuario() {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    const userId = usuario.id;

    if (!userId) {
      this.snackBar.open('Error: Usuario no encontrado', 'Cerrar', {
        duration: 3000
      });
      return;
    }

    this.reservaService.obtenerReservasPorUsuario(userId).subscribe(reservas => {
      this.reservas = reservas;
    }, error => {
      console.error(error);
      this.snackBar.open('Error al cargar las reservas', 'Cerrar', {
        duration: 3000
      });
    });
  }

  cargarDatosReserva(idHospedaje: number) {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    const userId = usuario.id;

    if (!userId) {
      this.snackBar.open('Error: Usuario no encontrado', 'Cerrar', {
        duration: 3000
      });
      return;
    }

    this.reservaService.obtenerReservaPorId(idHospedaje, userId).subscribe(reserva => {
      this.selectedReservaId = idHospedaje;
      this.editarReservaForm.patchValue({
        fechaCheckIn: reserva.fechaCheckIn,
        fechaCheckOut: reserva.fechaCheckOut,
        cantAdultos: reserva.cantAdultos,
        cantNinos: reserva.cantNinos,
        cantBebes: reserva.cantBebes,
        cantMascotas: reserva.cantMascotas
      }, { emitEvent: false });
    }, error => {
      console.error(error);
      this.snackBar.open('Error al cargar los datos de la reserva', 'Cerrar', {
        duration: 3000
      });
    });
  }

  onSubmit() {
    if (this.editarReservaForm.invalid) {
      return;
    }

    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    const userId = usuario.id;

    if (!userId || this.selectedReservaId === null) {
      this.snackBar.open('Error: Usuario o reserva no encontrado', 'Cerrar', {
        duration: 3000
      });
      return;
    }

    const idHospedaje = this.selectedReservaId;

    const editReservaDTO: ReservaDTO = {
      idHospedaje: idHospedaje,
      idUsuario: userId,
      fechaCheckIn: this.editarReservaForm.value.fechaCheckIn,
      fechaCheckOut: this.editarReservaForm.value.fechaCheckOut,
      cantNinos: this.editarReservaForm.value.cantNinos,
      cantAdultos: this.editarReservaForm.value.cantAdultos,
      cantBebes: this.editarReservaForm.value.cantBebes,
      cantMascotas: this.editarReservaForm.value.cantMascotas,
      importeTotal: 0 // Asigna el valor correcto si es necesario
    };

    this.reservaService.modificarReserva(idHospedaje, userId, editReservaDTO).subscribe(
      response => {
        this.snackBar.open('Reserva modificada con éxito', 'Cerrar', {
          duration: 3000
        });
        this.cargarReservasUsuario(); // Recargar la lista de reservas
      },
      error => {
        console.error(error);
        this.snackBar.open('Error al modificar la reserva', 'Cerrar', {
          duration: 3000
        });
      }
    );
  }
}