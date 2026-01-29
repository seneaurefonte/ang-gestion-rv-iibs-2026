import { DemandeService } from '../app/features/private/demande/services';
import { IDemandeService } from '../app/features/private/demande/services';

export const environment = {
    production: true,
    demandeServiceProvider: { provide: 'IDemandeService', useClass: DemandeService }
};
