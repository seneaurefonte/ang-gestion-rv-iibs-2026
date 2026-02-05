import { InjectionToken } from '@angular/core';
import { LoginRequest, LoginResponse, UserLogin } from '../models';

export interface IAuthService {
  login(credentials: LoginRequest): LoginResponse | null;
  logout(): void;
  getCurrentUser(): UserLogin | null;
  isAuthenticated(): boolean;
  refreshToken(): LoginResponse | null;
}

export const AUTH_SERVICE_TOKEN = new InjectionToken<IAuthService>('auth-service');
