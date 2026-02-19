import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DemandRVResponse, DemandRVFilter } from '../models/demande.model';
import { IDemandeService, DEMANDE_SERVICE_TOKEN } from '../services';

export const demandesResolver: ResolveFn<DemandRVResponse> = (route, state) => {
  const demandeService = inject(DEMANDE_SERVICE_TOKEN) as IDemandeService;
  
  const filters: DemandRVFilter = {
    page: 1,
    limit: 10
  };
  
  return demandeService.getDemandes(filters);
};
