import { DemandRV, StatutDemande } from '../features/private/demande/models/demande.model';

export const MOCK_DEMANDES: DemandRV[] = [
  {
    id: 'DEM-001',
    patientNom: 'Dupont',
    patientPrenom: 'Jean',
    specialite: 'Generaliste',
    dateDemandee: '2026-02-15',
    heure: '09:00',
    statut: StatutDemande.EN_ATTENTE,
    motif: 'Consultation générale',
    dateCreation: '2026-01-28',
    derniereModification: '2026-01-28'
  },
  {
    id: 'DEM-002',
    patientNom: 'Martin',
    patientPrenom: 'Marie',
    specialite: 'Cardiologue',
    dateDemandee: '2026-02-20',
    heure: '14:30',
    statut: StatutDemande.ACCEPTE,
    motif: 'Visite cardiologique',
    dateCreation: '2026-01-25',
    derniereModification: '2026-01-27'
  },
  {
    id: 'DEM-003',
    patientNom: 'Bernard',
    patientPrenom: 'Pierre',
    specialite: 'Dermatologue',
    dateDemandee: '2026-02-10',
    heure: '11:00',
    statut: StatutDemande.REFUSE,
    motif: 'Consultation dermatologie',
    dateCreation: '2026-01-20',
    derniereModification: '2026-01-26'
  },
  {
    id: 'DEM-004',
    patientNom: 'Durand',
    patientPrenom: 'Sophie',
    specialite: 'Generaliste',
    dateDemandee: '2026-03-01',
    heure: '10:00',
    statut: StatutDemande.EN_ATTENTE,
    motif: 'Bilan de santé',
    dateCreation: '2026-01-28',
    derniereModification: '2026-01-28'
  },
  {
    id: 'DEM-005',
    patientNom: 'Leclerc',
    patientPrenom: 'Luc',
    specialite: 'Cardiologue',
    dateDemandee: '2026-02-25',
    heure: '15:00',
    statut: StatutDemande.ACCEPTE,
    motif: 'Suivi post-opératoire',
    dateCreation: '2026-01-22',
    derniereModification: '2026-01-27'
  },
  {
    id: 'DEM-006',
    patientNom: 'Moreau',
    patientPrenom: 'Anne',
    specialite: 'Dermatologue',
    dateDemandee: '2026-02-18',
    heure: '13:30',
    statut: StatutDemande.ANNULE,
    motif: 'Enlèvement tatouage',
    dateCreation: '2026-01-15',
    derniereModification: '2026-01-25'
  },
  {
    id: 'DEM-007',
    patientNom: 'Laurent',
    patientPrenom: 'Claude',
    specialite: 'Generaliste',
    dateDemandee: '2026-03-05',
    heure: '08:30',
    statut: StatutDemande.EN_ATTENTE,
    motif: 'Prescription médicament',
    dateCreation: '2026-01-28',
    derniereModification: '2026-01-28'
  },
  {
    id: 'DEM-008',
    patientNom: 'Simon',
    patientPrenom: 'Isabelle',
    specialite: 'Cardiologue',
    dateDemandee: '2026-02-22',
    heure: '16:00',
    statut: StatutDemande.ACCEPTE,
    motif: 'Échocardiographie',
    dateCreation: '2026-01-24',
    derniereModification: '2026-01-28'
  },
  {
    id: 'DEM-009',
    patientNom: 'Michel',
    patientPrenom: 'Francoise',
    specialite: 'Dermatologue',
    dateDemandee: '2026-02-28',
    heure: '12:00',
    statut: StatutDemande.EN_ATTENTE,
    motif: 'Traitement acné',
    dateCreation: '2026-01-27',
    derniereModification: '2026-01-27'
  },
  {
    id: 'DEM-010',
    patientNom: 'David',
    patientPrenom: 'Thomas',
    specialite: 'Generaliste',
    dateDemandee: '2026-02-12',
    heure: '09:30',
    statut: StatutDemande.REFUSE,
    motif: 'Certificat médical',
    dateCreation: '2026-01-18',
    derniereModification: '2026-01-24'
  },
  {
    id: 'DEM-011',
    patientNom: 'Richard',
    patientPrenom: 'Michèle',
    specialite: 'Cardiologue',
    dateDemandee: '2026-03-08',
    heure: '14:00',
    statut: StatutDemande.EN_ATTENTE,
    motif: 'Consultation de routine',
    dateCreation: '2026-01-28',
    derniereModification: '2026-01-28'
  },
  {
    id: 'DEM-012',
    patientNom: 'Charles',
    patientPrenom: 'Nathalie',
    specialite: 'Dermatologue',
    dateDemandee: '2026-03-02',
    heure: '11:30',
    statut: StatutDemande.ACCEPTE,
    motif: 'Contrôle grain de beauté',
    dateCreation: '2026-01-26',
    derniereModification: '2026-01-28'
  }
];
