import { Provider } from '@angular/core';
import { AuthService } from './auth.service';
import { AUTH_SERVICE_TOKEN } from './auth.service.interface';

export const AUTH_SERVICE_PROVIDERS: Provider[] = [
  {
    provide: AUTH_SERVICE_TOKEN,
    useClass: AuthService
  },
  AuthService
];
