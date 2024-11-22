// src/app/components/inquilino/cancelar-reserva/cancelar-reserva.component.ts
import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/service/reserva.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cancelar-reserva',
  templateUrl: './cancelar-reserva.component.html',
  styleUrls: ['./cancelar-reserva.component.css']
})
export class CancelarReservaComponent implements OnInit {
  reservas: any[] = [];

  constructor(private reservaService: ReservaService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.cargarReservas();
  }

  cargarReservas() {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    const userId = usuario.id;

    if (userId) {
      this.reservaService.obtenerReservasPorUsuario(userId).subscribe(reservas => {
        this.reservas = reservas;
      }, error => {
        console.error('Error al cargar reservas:', error);
        this.snackBar.open('Error al cargar reservas', 'Cerrar', { duration: 3000 });
      });
    }
  }

  eliminarReserva(idHospedaje: number) {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    const userId = usuario.id;

    if (userId) {
      this.reservaService.eliminarReserva(idHospedaje, userId).subscribe(() => {
        this.snackBar.open('Reserva eliminada con éxito', 'Cerrar', { duration: 3000 });
        this.cargarReservas(); // Recargar reservas después de eliminar
      }, error => {
        console.error('Error al eliminar la reserva:', error);
        this.snackBar.open('Error al eliminar la reserva', 'Cerrar', { duration: 3000 });
      });
    }
  }
}