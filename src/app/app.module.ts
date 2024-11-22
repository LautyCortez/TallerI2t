import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


/* Componentes */

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReservarHospedajeComponent } from './components/inquilino/reservar-hospedaje/reservar-hospedaje.component';
import { ModificarReservaComponent } from './components/inquilino/modificar-reserva/modificar-reserva.component';
import { CancelarReservaComponent } from './components/inquilino/cancelar-reserva/cancelar-reserva.component';
import { AltaHospedajeComponent } from './components/anfitrion/alta-hospedaje/alta-hospedaje.component';
import { ModificacionHospedajeComponent } from './components/anfitrion/modificacion-hospedaje/modificacion-hospedaje.component';
import { EliminarHospedajeComponent } from './components/anfitrion/eliminar-hospedaje/eliminar-hospedaje.component';
import { GlobalDialogComponent } from './components/global-dialog/global-dialog.component';
import { NavbarComponent } from './components/navbar/navbar.component';




/* Imports Angular Material */
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormGroup } from '@angular/forms';
import { MatOptgroup } from '@angular/material/core';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { HomeComponent } from './components/home/home.component';
import { MatTableModule } from '@angular/material/table';
import { ListaHospedajesComponent } from './components/anfitrion/lista-hospedajes/lista-hospedajes.component';
import { EditarMisDatosComponent } from './components/editar-mis-datos/editar-mis-datos.component';
import { AltaServicioComponent } from './components/administrador/alta-servicio/alta-servicio.component';
import { ModificacionServicioComponent } from './components/administrador/modificacion-servicio/modificacion-servicio.component';
import { EliminacionServicioComponent } from './components/administrador/eliminacion-servicio/eliminacion-servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    DashboardComponent,
    ReservarHospedajeComponent,
    ModificarReservaComponent,
    CancelarReservaComponent,
    AltaHospedajeComponent,
    ModificacionHospedajeComponent,
    EliminarHospedajeComponent,
    GlobalDialogComponent,
    NavbarComponent,
    HomeComponent,
    ListaHospedajesComponent,
    EditarMisDatosComponent,
    AltaServicioComponent,
    ModificacionServicioComponent,
    EliminacionServicioComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
