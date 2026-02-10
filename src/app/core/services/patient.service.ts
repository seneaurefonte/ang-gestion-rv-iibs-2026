import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { USERS_LOGIN_MOCK } from '../../mocks/users.mock';
import { Patient } from '../models';

@Injectable({ providedIn: 'root' })
export class PatientService {
  // In-memory patients initialisés depuis USERS_LOGIN_MOCK
  private patients: Patient[] = USERS_LOGIN_MOCK
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

  constructor() {}

  /** Simule la création d'un patient et retourne l'objet créé */
  createPatient(patient: Partial<Patient>): Observable<Patient> {
    const maxId = this.patients.reduce((acc, p) => (p.id && p.id > acc ? p.id : acc), 0);
    const id = maxId + 1;
    const newPatient: Patient = {
      id,
      numero: patient.numero || `PAT-${String(id).padStart(3, '0')}`,
      nom: patient.nom || '',
      prenom: patient.prenom || '',
      telephone: patient.telephone || '',
      adresse: patient.adresse || '',
      antecedents: patient.antecedents || '',
      createdAt: new Date().toISOString()
    };

    this.patients.push(newPatient);

    // Renvoie l'objet créé après un court délai pour simuler la latence
    return of(newPatient).pipe(delay(300));
  }

  /** Optionnel: récupérer la liste des patients (mock) */
  getPatients(): Observable<Patient[]> {
    return of(this.patients).pipe(delay(200));
  }
}
