import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservaService } from 'src/app/service/reserva.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReservaDTO } from 'src/app/models/reserva.model';
import { MatDatepicker, MatDatepickerInput } from '@angular/material/datepicker';

@Component({
  selector: 'app-modificar-reserva',
  templateUrl: './modificar-reserva.component.html',
  styleUrls: ['./modificar-reserva.component.css']
})
export class ModificarReservaComponent implements OnInit {
  editarReservaForm: FormGroup;
 
  reservaId: any;

  @ViewChild('checkinPicker') checkinPicker!: MatDatepicker<Date>;
  @ViewChild('checkoutPicker') checkoutPicker!: MatDatepicker<Date>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
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
    this.cargarDatosReserva();
  }

  cargarDatosReserva() {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    const userId = usuario.id;
  
    if (!userId) {
      this.snackBar.open('Error: Usuario no encontrado', 'Cerrar', {
        duration: 3000
      });
      return;
    }
  
    // Asegúrate de tener el idHospedaje disponible
    const idHospedaje = this.reservaId;
  
    this.reservaService.obtenerReservaPorId(idHospedaje, userId).subscribe(reserva => {
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

  }
}