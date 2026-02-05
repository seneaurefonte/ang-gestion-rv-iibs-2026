import { Injectable } from '@angular/core';
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
      return response;
    }

    return null;
  }

 
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
