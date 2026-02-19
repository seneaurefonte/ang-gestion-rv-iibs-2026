import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DemandRV, DemandRVResponse, DemandRVFilter } from '../models/demande.model';
import { IDemandeService } from './demande.interface';
import { MOCK_DEMANDES } from '@mock/demande.mock';

@Injectable({
  providedIn: 'root'
})
export class DemandeService implements IDemandeService {
  private apiUrl = '/api/demandes'; // À remplacer par l'URL réelle de votre API

  constructor() {}

  /**
   * Récupère la liste des demandes de RV avec filtrage et pagination
   */
  getDemandes(filters: DemandRVFilter = {}): Observable<DemandRVResponse> {
    return of(this.getMockDemandes(filters)).pipe(
      delay(5000) // Délai de 5 secondes
    );
  }

  /**
   * Récupère une demande spécifique par ID
   */
  getDemandeById(id: string): Observable<DemandRV> {
    // Utiliser les mocks
    const demande = MOCK_DEMANDES.find(d => d.id === id);
    return of(demande || {} as DemandRV);

    // Décommenter pour l'API réelle:
    // return this.http.get<DemandRV>(`${this.apiUrl}/${id}`);
  }

  /**
   * Crée une nouvelle demande de RV
   */
  createDemande(demande: Omit<DemandRV, 'id' | 'dateCreation' | 'derniereModification'>): Observable<DemandRV> {
    // Pour le mock, retourner la demande avec un ID généré
    const newDemande: DemandRV = {
      ...demande,
      id: this.generateId(),
      dateCreation: new Date().toISOString(),
      derniereModification: new Date().toISOString()
    };
    return of(newDemande);

    // Décommenter pour l'API réelle:
    // return this.http.post<DemandRV>(this.apiUrl, demande);
  }

  /**
   * Met à jour une demande de RV
   */
  updateDemande(id: string, demande: Partial<DemandRV>): Observable<DemandRV> {
    const updated: DemandRV = {
      ...MOCK_DEMANDES.find(d => d.id === id) as DemandRV,
      ...demande,
      derniereModification: new Date().toISOString()
    };
    return of(updated);

    // Décommenter pour l'API réelle:
    // return this.http.put<DemandRV>(`${this.apiUrl}/${id}`, demande);
  }

  /**
   * Supprime une demande de RV
   */
  deleteDemande(id: string): Observable<void> {
    return of(void 0);

    // Décommenter pour l'API réelle:
    // return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Récupère les données mock avec filtrage et pagination
   */
  private getMockDemandes(filters: DemandRVFilter): DemandRVResponse {
    let demandes = [...MOCK_DEMANDES];
    // Filtrer par statut
    if (filters.statut) {
      demandes = demandes.filter(d => d.statut === filters.statut);
    }
    // Filtrer par spécialité
    if (filters.specialite) {
      demandes = demandes.filter(d =>
        d.specialite.toLowerCase().includes(filters.specialite!.toLowerCase())
      );
    }

    // Pagination
    const page = filters.page || 1;
    const limit = filters.limit || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedDemandes = demandes.slice(startIndex, endIndex);

    return {
      data: paginatedDemandes,
      totalPages: Math.ceil(demandes.length / limit),
      currentPage: page,
      totalItems: demandes.length
    };
  }

  /**
   * Génère un ID unique
   */
  private generateId(): string {
    return 'DEM-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  }


}
