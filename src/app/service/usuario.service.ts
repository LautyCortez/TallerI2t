import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditUsuarioDTO } from '../models/edit-usuariodto.model';
import { Usuario } from '../models/usuario.model'; 


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 //aca hay cosas duplicadas con el authService. Hay que corregir.
  
  private apiUrl = 'http://localhost:8080/api/auth'; 
  private userApiUrl = 'http://localhost:8080/api/usuarios'; 
  
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  register(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, usuario);
  }

  findById(id: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/user/${id}`); // Asegúrate de que esta URL sea correcta
  }

  editarUsuario(id: number, usuario: Usuario): Observable<any> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put<any>(`${this.apiUrl}/edit/${id}`, usuario, { headers });
}

  findByUsername(username: string): Observable<Usuario> {
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Usuario>(`${this.apiUrl}/user/username/${username}`, { headers });
  }

  actualizarUsuario(editUsuarioDTO: EditUsuarioDTO): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put(`${this.userApiUrl}/modificar`, editUsuarioDTO, { headers, responseType: 'text' });
  }
}
