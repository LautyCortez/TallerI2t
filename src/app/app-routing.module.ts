import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Componentes */

import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

/* Inquilino */
import { CancelarReservaComponent } from './components/inquilino/cancelar-reserva/cancelar-reserva.component';
import { ModificarReservaComponent } from './components/inquilino/modificar-reserva/modificar-reserva.component';
import { ReservarHospedajeComponent } from './components/inquilino/reservar-hospedaje/reservar-hospedaje.component';


/* Anfitrion */
import { AltaHospedajeComponent } from './components/anfitrion/alta-hospedaje/alta-hospedaje.component';
import { EliminarHospedajeComponent } from './components/anfitrion/eliminar-hospedaje/eliminar-hospedaje.component';
import { ModificacionHospedajeComponent } from './components/anfitrion/modificacion-hospedaje/modificacion-hospedaje.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'altaHospedaje', component: AltaHospedajeComponent},
  { path: 'eliminarHospedaje', component: EliminarHospedajeComponent},
  { path: 'modificacionHospedaje', component: ModificacionHospedajeComponent},
  { path: 'cancelarReserva', component: CancelarReservaComponent},
  { path: 'modificarReserva', component: ModificarReservaComponent},
  { path: 'reservarHospedaje', component: ReservarHospedajeComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
