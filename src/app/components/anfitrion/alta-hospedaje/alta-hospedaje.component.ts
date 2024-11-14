import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospedajeService } from 'src/app/service/hospedaje.service';
import { TipoHospedajeService } from 'src/app/service/tipo-hospedaje.service';
import { CiudadService } from 'src/app/service/ciudad.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { HospedajeDTO } from 'src/app/models/hospedaje.model';

@Component({
  selector: 'app-alta-hospedaje',
  templateUrl: './alta-hospedaje.component.html',
  styleUrls: ['./alta-hospedaje.component.css']
})
export class AltaHospedajeComponent {
  altaHospedajeForm: FormGroup;
  tiposHospedaje: any[] = [];
  ciudades: any[] = [];
  servicios: any[] = [];

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private hospedajeService: HospedajeService,
    private tipoHospedajeService: TipoHospedajeService,
    private ciudadService: CiudadService,
    private servicioService: ServicioService
  ) {
    this.altaHospedajeForm = this.fb.group({
      descripcion: ['', Validators.required],
      precioPorNoche: ['', [Validators.required, Validators.min(1)]],
      imagen: ['', Validators.required],
      tipoHospedajeId: ['', Validators.required],
      ciudadId: ['', Validators.required],
      serviciosIds: [[], Validators.required]
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
    if (this.altaHospedajeForm.valid) {
      const hospedajeDTO: HospedajeDTO = this.altaHospedajeForm.value;
      this.hospedajeService.crearHospedaje(hospedajeDTO).subscribe(response => {
        alert('Hospedaje creado con éxito');
        this.router.navigate(['/dashboard']);
      }, error => {
        console.error(error);
        alert('Error al crear el hospedaje');
      });
    }
  }
}