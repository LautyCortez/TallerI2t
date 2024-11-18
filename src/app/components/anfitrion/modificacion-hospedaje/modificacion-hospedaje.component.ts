import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospedajeService } from 'src/app/service/hospedaje.service';
import { TipoHospedajeService } from 'src/app/service/tipo-hospedaje.service';
import { CiudadService } from 'src/app/service/ciudad.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { EditHospedajeDTO } from 'src/app/models/hospedaje.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modificacion-hospedaje',
  templateUrl: './modificacion-hospedaje.component.html',
  styleUrls: ['./modificacion-hospedaje.component.css']
})
export class ModificacionHospedajeComponent implements OnInit {
  modificarHospedajeForm: FormGroup;
  tiposHospedaje: any[] = [];
  ciudades: any[] = [];
  servicios: any[] = [];

  constructor(
    private fb: FormBuilder,
    private hospedajeService: HospedajeService,
    private tipoHospedajeService: TipoHospedajeService,
    private ciudadService: CiudadService,
    private servicioService: ServicioService,
    public dialogRef: MatDialogRef<ModificacionHospedajeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.modificarHospedajeForm = this.fb.group({
      id: [data.id, Validators.required],
      descripcion: [data.descripcion, Validators.required],
      precioPorNoche: [data.precioPorNoche, [Validators.required, Validators.min(1)]],
      imagen: [data.imagen, Validators.required],
      tipoHospedajeId: [data.tipoHospedajeId, Validators.required],
      ciudadId: [data.ciudadId, Validators.required],
      serviciosIds: [data.serviciosIds, Validators.required]
  });
  }

  ngOnInit() {
    this.loadTiposHospedaje();
    this.loadCiudades();
    this.loadServicios();
  }

  loadTiposHospedaje() {
    this.tipoHospedajeService.obtenerTiposHospedaje().subscribe(data => {
      this.tiposHospedaje = data;
    });
  }

  loadCiudades() {
    this.ciudadService.obtenerCiudades().subscribe(data => {
      this.ciudades = data;
    });
  }

  loadServicios() {
    this.servicioService.obtenerServicios().subscribe(data => {
      this.servicios = data;
    });
  }

  onSubmit() {
    console.log(this.modificarHospedajeForm);
    if (this.modificarHospedajeForm.valid) {
        const editHospedajeDTO: EditHospedajeDTO = {
            id: this.modificarHospedajeForm.value.id,
            descripcion: '',
            precioPorNoche: 0,
            imagen: '',
            tipoHospedajeId: 0,
            ciudadId: 0,
            serviciosIds: []
        };

        // Solo agregar los campos que han sido modificados
        if (this.modificarHospedajeForm.value.descripcion) {
            editHospedajeDTO.descripcion = this.modificarHospedajeForm.value.descripcion;
        }
        if (this.modificarHospedajeForm.value.precioPorNoche) {
            editHospedajeDTO.precioPorNoche = this.modificarHospedajeForm.value.precioPorNoche;
        }
        if (this.modificarHospedajeForm.value.imagen) {
            editHospedajeDTO.imagen = this.modificarHospedajeForm.value.imagen;
        }
        if (this.modificarHospedajeForm.value.tipoHospedajeId) {
            editHospedajeDTO.tipoHospedajeId = this.modificarHospedajeForm.value.tipoHospedajeId;
        }
        if (this.modificarHospedajeForm.value.ciudadId) {
            editHospedajeDTO.ciudadId = this.modificarHospedajeForm.value.ciudadId;
        }
        if (this.modificarHospedajeForm.value.serviciosIds) {
            editHospedajeDTO.serviciosIds = this.modificarHospedajeForm.value.serviciosIds;
        }

        // Asegúrate de que el ID del hospedaje se obtenga correctamente
        const hospedajeId = this.modificarHospedajeForm.value.id;

        this.hospedajeService.editarHospedaje(hospedajeId, editHospedajeDTO).subscribe(response => {
            alert('Hospedaje modificado con éxito');
            this.dialogRef.close(true); 
        }, error => {
            console.error(error);
            alert('Error al modificar el hospedaje');
        });
    } else {
        console.log(this.modificarHospedajeForm.errors);
        alert('Por favor, completa todos los campos requeridos.');
    }
}
}