import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { username, password });
  }

  register(usuario: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, usuario);
  }

  getCurrentUser(): Usuario | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  saveUser(user: Usuario): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearUser(): void {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole'); // Leer el rol directamente del localStorage
  }
}