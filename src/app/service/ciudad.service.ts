import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ciudad } from '../models/ciudad.model'; 

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private apiUrl = 'http://localhost:8080/api/ciudades';

  constructor(private http: HttpClient) { }

  obtenerCiudades(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(`${this.apiUrl}/all`);
  }

  obtenerCiudadPorId(id: number): Observable<Ciudad> {
    return this.http.get<Ciudad>(`${this.apiUrl}/${id}`);
  }

  crearCiudad(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(`${this.apiUrl}/crear`, ciudad);
  }

  editarCiudad(id: number, ciudad: Ciudad): Observable<Ciudad> {
    return this.http.put<Ciudad>(`${this.apiUrl}/edit/${id}`, ciudad);
  }

  eliminarCiudad(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}