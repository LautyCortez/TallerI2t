import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private currentUserSubject = new BehaviorSubject<Usuario | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();


  constructor(private http: HttpClient) { 

    const user = this.getCurrentUser();
    if (user) {
      this.currentUserSubject.next(user);
    }

  }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { username, password });
  }

  register(usuario: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, usuario);
  }

   getCurrentUser(): Usuario | null {
    const userJson = localStorage.getItem('currentUser');
    if (userJson) {
      try {
        return JSON.parse(userJson) as Usuario;
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
      }
    }
    return null;
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
    return localStorage.getItem('userRole'); 

  }
}