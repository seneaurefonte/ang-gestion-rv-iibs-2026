import { Patient } from '../core/models';
import { USERS_LOGIN_MOCK } from './users.mock';

/**
 * Génère une liste de patients basée sur USERS_LOGIN_MOCK (role === 'Patient')
 */
export const PATIENTS_MOCK: Patient[] = USERS_LOGIN_MOCK
  .filter(u => u.role === 'Patient')
  .map(u => ({
    id: u.id,
    numero: `PAT-${String(u.id).padStart(3, '0')}`,
    nom: u.nom,
    prenom: u.prenom,
    telephone: u.telephone,
    adresse: 'Non renseignée',
    antecedents: '',
    createdAt: new Date().toISOString()
  }));
