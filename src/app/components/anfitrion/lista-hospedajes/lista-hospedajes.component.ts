import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HospedajeService } from 'src/app/service/hospedaje.service';
import { HospedajeDTO } from 'src/app/models/hospedaje.model';
import { ModificacionHospedajeComponent } from '../modificacion-hospedaje/modificacion-hospedaje.component';

@Component({
  selector: 'app-lista-hospedajes',
  templateUrl: './lista-hospedajes.component.html',
  styleUrls: ['./lista-hospedajes.component.css']
})
export class ListaHospedajesComponent implements OnInit {
  hospedajes: HospedajeDTO[] = [];

  constructor(private hospedajeService: HospedajeService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadHospedajes();
  }

  loadHospedajes() {
    this.hospedajeService.obtenerTodosHospedajes().subscribe(data => {
      this.hospedajes = data;
    }, error => {
      console.error('Error al cargar hospedajes:', error);
    });
  }

  openDialog(hospedaje: HospedajeDTO) {
    const dialogRef = this.dialog.open(ModificacionHospedajeComponent, {
      width: '800px',
      height: '600px',
      data: hospedaje
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadHospedajes(); 
      }
    });
  }
}