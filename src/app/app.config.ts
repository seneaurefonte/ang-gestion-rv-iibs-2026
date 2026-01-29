import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DEMANDE_SERVICE_TOKEN } from '@service';
import { environment } from '../environments/environment';

import { routes } from './app.routes';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: DEMANDE_SERVICE_TOKEN, useClass: environment.demandeServiceProvider.useClass }
  ]
   
};
