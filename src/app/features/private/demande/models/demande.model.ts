export enum StatutDemande {
  EN_ATTENTE = 'en_attente',
  ACCEPTE = 'accepte',
  REFUSE = 'refuse',
  ANNULE = 'annule'
}

export interface DemandRV {
  id: string;
  patientNom: string;
  patientPrenom: string;
  specialite: string;
  dateDemandee: string;
  heure: string;
  statut: StatutDemande;
  motif: string;
  dateCreation: string;
  derniereModification: string;
}

export interface DemandRVResponse {
  data: DemandRV[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
}

export interface DemandRVFilter {
  statut?: StatutDemande | '';
  specialite?: string;
  page?: number;
  limit?: number;
}
