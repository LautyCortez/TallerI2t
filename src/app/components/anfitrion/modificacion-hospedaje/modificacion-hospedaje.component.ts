import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { HospedajeService } from 'src/app/service/hospedaje.service';
import { TipoHospedajeService } from 'src/app/service/tipo-hospedaje.service';
import { CiudadService } from 'src/app/service/ciudad.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { EditHospedajeDTO } from 'src/app/models/hospedaje.model';
import { DialogComponent } from '../../global-dialog/interface/dialog-ref.interface';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modificacion-hospedaje',
  templateUrl: './modificacion-hospedaje.component.html',
  styleUrls: ['./modificacion-hospedaje.component.css']
})
export class ModificacionHospedajeComponent implements OnInit, DialogComponent {
  modificarHospedajeForm: FormGroup;
  tiposHospedaje: any[] = [];
  ciudades: any[] = [];
  servicios: any[] = [];
  hospedajeId!: number;
  dialogRef?: MatDialogRef<any>;
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private hospedajeService: HospedajeService,
    private tipoHospedajeService: TipoHospedajeService,
    private ciudadService: CiudadService,
    private servicioService: ServicioService
    
  ) {
    this.modificarHospedajeForm = this.fb.group({
      id: ['', Validators.required],
      descripcion: ['', Validators.required],
      precioPorNoche: ['', [Validators.required, Validators.min(1)]],
      imagen: ['', Validators.required],
      tipoHospedajeId: ['', Validators.required],
      ciudadId: ['', Validators.required],
      serviciosIds: [[], Validators.required]
    });
  }

  ngOnInit() {
    this.hospedajeId = +this.route.snapshot.paramMap.get('id')!;
    this.loadTiposHospedaje();
    this.loadCiudades();
    this.loadServicios();
    this.loadHospedajeData();
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
      }, error => {
        console.error('Error al cargar servicios', error);
      });
    }
  
    loadHospedajeData() {
      this.hospedajeService.obtenerHospedajePorId(this.hospedajeId).subscribe(data => {
        this.modificarHospedajeForm.patchValue({
          id: data.id,
          descripcion: data.descripcion,
          precioPorNoche: data.precioPorNoche,
          imagen: data.imagen,
          tipoHospedajeId: data.tipoHospedaje.id,
          ciudadId: data.ciudad.id,
          serviciosIds: data.servicios.map((servicio: {id: number}) => servicio.id)
        });
      });
    }
  
    onSubmit() {
      if (this.modificarHospedajeForm.valid) {
        const editHospedajeDTO: EditHospedajeDTO = this.modificarHospedajeForm.value;
        this.hospedajeService.editarHospedaje(editHospedajeDTO.id, editHospedajeDTO).subscribe(response => {
          alert('Hospedaje modificado con éxito');
          this.router.navigate(['/dashboard']);
        }, error => {
          console.error(error);
          alert('Error al modificar el hospedaje');
        });
      }
    }
}
