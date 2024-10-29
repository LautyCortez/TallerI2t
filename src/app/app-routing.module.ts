import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Componentes */

import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent},
/*   { path: '', redirectTo: '/home', pathMatch: 'full' },  */
{ path: '', redirectTo: '/login', pathMatch: 'full' },  
{ path: 'login', component: LoginComponent },  
{path: 'registro', component: RegistroComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
