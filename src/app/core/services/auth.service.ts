import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRequest, LoginResponse, UserLogin } from '../models';
import { USERS_LOGIN_MOCK } from '../../mocks/users.mock';
import { IAuthService, AUTH_SERVICE_TOKEN } from './auth.service.interface';

@Injectable({
  providedIn: 'root',
  useClass: AuthService
})
export class AuthService implements IAuthService {
  private readonly STORAGE_KEY = 'user_auth';
  private readonly TOKEN_KEY = 'auth_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';

  // BehaviorSubject pour gérer l'état de l'utilisateur
  private currentUserSubject = new BehaviorSubject<UserLogin | null>(this.getCurrentUser());
  public currentUser$ = this.currentUserSubject.asObservable();

  // BehaviorSubject pour gérer l'état d'authentification
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.isAuthenticatedSync());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  login(credentials: LoginRequest): LoginResponse | null {
    // Rechercher l'utilisateur dans les mocks
    const user = USERS_LOGIN_MOCK.find(u => u.email === credentials.email);

    if (!user) {
      console.error('Utilisateur non trouvé');
      return null;
    }

    const response: LoginResponse = {
      user: user,
      token: user.token || 'default_token',
      refreshToken: user.refreshToken || 'default_refresh_token',
      expiresIn: user.expiresIn || 3600
    };

    // Stocker dans localStorage
    this.storeUserData(response);

    // Mettre à jour les BehaviorSubjects
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);

    return response;
  }
   private storeUserData(response: LoginResponse): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(response.user));
    localStorage.setItem(this.TOKEN_KEY, response.token);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, response.refreshToken);
  }


  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);

    // Mettre à jour les BehaviorSubjects
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentUser(): UserLogin | null {
    const userData = localStorage.getItem(this.STORAGE_KEY);
    if (userData) {
      try {
        return JSON.parse(userData);
      } catch (error) {
        console.error('Erreur lors du parsing des données utilisateur', error);
        return null;
      }
    }
    return null;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return !!token && !!this.getCurrentUser();
  }

  private isAuthenticatedSync(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return !!token && !!this.getCurrentUser();
  }








  refreshToken(): LoginResponse | null {
    const refreshToken = localStorage.getItem(this.REFRESH_TOKEN_KEY);
    if (!refreshToken) {
      return null;
    }

    // Simuler le refresh token avec les données mocké
    const user = this.getCurrentUser();
    if (user) {
      const response: LoginResponse = {
        user: user,
        token: 'new_token_' + Date.now(),
        refreshToken: 'new_refresh_token_' + Date.now(),
        expiresIn: 3600
      };

      this.storeUserData(response);
      
      // Mettre à jour les BehaviorSubjects
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);

      return response;
    }

    return null;
  }

 
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
