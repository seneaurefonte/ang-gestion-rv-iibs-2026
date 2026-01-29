import { DemandeService } from '../app/features/private/demande/services';
import { IDemandeService } from '../app/features/private/demande/services';

export const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api',
    strategie: 'http',
    demandeServiceProvider: { provide: 'IDemandeService', useClass: DemandeService }
};
