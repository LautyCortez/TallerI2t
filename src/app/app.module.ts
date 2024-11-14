import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


/* Componentes */

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';




/* Imports Angular Material */
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatOptgroup } from '@angular/material/core';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReservarHospedajeComponent } from './components/inquilino/reservar-hospedaje/reservar-hospedaje.component';
import { ModificarReservaComponent } from './components/inquilino/modificar-reserva/modificar-reserva.component';
import { CancelarReservaComponent } from './components/inquilino/cancelar-reserva/cancelar-reserva.component';
import { AltaHospedajeComponent } from './components/anfitrion/alta-hospedaje/alta-hospedaje.component';
import { ModificacionHospedajeComponent } from './components/anfitrion/modificacion-hospedaje/modificacion-hospedaje.component';
import { EliminarHospedajeComponent } from './components/anfitrion/eliminar-hospedaje/eliminar-hospedaje.component';

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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
