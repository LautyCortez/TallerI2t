import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditUsuarioDTO } from '../models/edit-usuariodto.model';
import { Usuario } from '../models/usuario.model'; 


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  private apiUrl = 'http://localhost:8080/api/auth'; 
  
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

  actualizarUsuario(id: number, editUsuarioDTO: EditUsuarioDTO): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/edit/${id}`, editUsuarioDTO);
}

findByUsername(username: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/user/username/${username}`); // Asegúrate de que esta URL sea correcta
}
}
