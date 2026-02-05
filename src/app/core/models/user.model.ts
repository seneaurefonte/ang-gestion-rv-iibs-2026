export interface User {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  telephone: string;
  role: UserRole;
  isActive: boolean;
}

export type UserRole = 'Admin' | 'Medecin' | 'Patient';
 