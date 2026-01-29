import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandRV, DemandRVResponse, DemandRVFilter } from '../models/demande.model';

/**
 * Interface pour le service DemandeService
 */
export interface IDemandeService {
  getDemandes(filters?: DemandRVFilter): Observable<DemandRVResponse>;
  getDemandeById(id: string): Observable<DemandRV>;
  createDemande(demande: Omit<DemandRV, 'id' | 'dateCreation' | 'derniereModification'>): Observable<DemandRV>;
  updateDemande(id: string, demande: Partial<DemandRV>): Observable<DemandRV>;
  deleteDemande(id: string): Observable<void>;
}

/**
 * Token d'injection pour l'interface IDemandeService
 */
export const DEMANDE_SERVICE_TOKEN = new InjectionToken<IDemandeService>('IDemandeService');
