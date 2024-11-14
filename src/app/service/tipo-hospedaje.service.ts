import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoHospedaje } from '../models/tipo-hospedaje.model'; 

@Injectable({
  providedIn: 'root'
})
export class TipoHospedajeService {
  private apiUrl = 'http://localhost:8080/api/tipos-hospedaje';

  constructor(private http: HttpClient) { }

  obtenerTiposHospedaje(): Observable<TipoHospedaje[]> {
    return this.http.get<TipoHospedaje[]>(`${this.apiUrl}/all`);
  }

  obtenerTipoHospedajePorId(id: number): Observable<TipoHospedaje> {
    return this.http.get<TipoHospedaje>(`${this.apiUrl}/${id}`);
  }

  crearTipoHospedaje(tipoHospedaje: TipoHospedaje): Observable<TipoHospedaje> {
    return this.http.post<TipoHospedaje>(`${this.apiUrl}/crear`, tipoHospedaje);
  }

  editarTipoHospedaje(id: number, tipoHospedaje: TipoHospedaje): Observable<TipoHospedaje> {
    return this.http.put<TipoHospedaje>(`${this.apiUrl}/edit/${id}`, tipoHospedaje);
  }

  eliminarTipoHospedaje(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}