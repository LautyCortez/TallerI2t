import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospedajeService } from 'src/app/service/hospedaje.service';
import { HospedajeDTO } from 'src/app/models/hospedaje.model';

@Component({
  selector: 'app-eliminar-hospedaje',
  templateUrl: './eliminar-hospedaje.component.html',
  styleUrls: ['./eliminar-hospedaje.component.css']
})
export class EliminarHospedajeComponent implements OnInit {
  hospedajes: HospedajeDTO[] = [];

  constructor(private hospedajeService: HospedajeService, private router: Router) {}

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

  eliminarHospedaje(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este hospedaje?')) {
      this.hospedajeService.eliminarHospedaje(id).subscribe(() => {
        alert('Hospedaje eliminado con éxito');
        this.loadHospedajes(); // Recargar la lista después de eliminar
      }, error => {
        console.error('Error al eliminar el hospedaje:', error);
        alert('Error al eliminar el hospedaje');
      });
    }
  }
}