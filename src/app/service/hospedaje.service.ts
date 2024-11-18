import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HospedajeDTO } from '../models/hospedaje.model';
import { EditHospedajeDTO } from '../models/hospedaje.model';

@Injectable({
  providedIn: 'root'
})
export class HospedajeService {
  private apiUrl = 'http://localhost:8080/api/hospedajes';

  constructor(private http: HttpClient) { }

  crearHospedaje(hospedajeDTO: HospedajeDTO): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<any>(`${this.apiUrl}/crear`, hospedajeDTO, { headers });
  }

  editarHospedaje(id: number, editHospedajeDTO: EditHospedajeDTO): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/edit/${id}`, editHospedajeDTO);
  }

  obtenerTodosHospedajes(): Observable<HospedajeDTO[]> {
    return this.http.get<HospedajeDTO[]>(`${this.apiUrl}/all`);
  }

  obtenerHospedajePorId(id: number): Observable<HospedajeDTO> {
    return this.http.get<HospedajeDTO>(`${this.apiUrl}/${id}`);
  }

  eliminarHospedaje(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`, { headers });
  }
}