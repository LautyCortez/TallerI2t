import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl = 'http://localhost:8080/api/reservas';

  constructor(private http: HttpClient) {}

  crearReserva(reservaDTO: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<any>(`${this.apiUrl}/crear`, reservaDTO, { headers });
  }

  obtenerReservas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  obtenerReservaPorId(idHospedaje: number, idUsuario: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${idHospedaje}/${idUsuario}`);
  }

  modificarReserva(idHospedaje: number, idUsuario: number, editReservaDTO: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put<any>(`${this.apiUrl}/modificar/${idHospedaje}/${idUsuario}`, editReservaDTO, { headers });
  }

  eliminarReserva(idHospedaje: number, idUsuario: number): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.delete<void>(`${this.apiUrl}/delete/${idHospedaje}/${idUsuario}`, { headers });
  }
}