import { User, UserRole, UserLogin } from '../core/models';

export const USER_LOGIN_MOCK: UserLogin = {
  id: 1,
  email: 'admin@example.com',
  nom: 'Dupont',
  prenom: 'Jean',
  telephone: '+33612345678',
  role: "Admin",
  isActive: true,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkFkbWluIiwiaWF0IjoxNjM5NTc2MDAwLCJleHAiOjE2Mzk1Nzk2MDB9.signature',
  refreshToken: 'refresh_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIn0.signature',
  expiresIn: 3600
};

export const USERS_LOGIN_MOCK: UserLogin[] = [
  {
    id: 1,
    email: 'admin@example.com',
    nom: 'Dupont',
    prenom: 'Jean',
    telephone: '+33612345678',
    role: 'Admin',
    isActive: true,
    token: 'admin_token_123',
    refreshToken: 'admin_refresh_token_123',
    expiresIn: 3600
  },
  {
    id: 2,
    email: 'doctor@example.com',
    nom: 'Martin',
    prenom: 'Marie',
    telephone: '+33623456789',
    role: 'Medecin',
    isActive: true,
    token: 'doctor_token_456',
    refreshToken: 'doctor_refresh_token_456',
    expiresIn: 3600
  },
  {
    id: 3,
    email: 'patient@example.com',
    nom: 'Durand',
    prenom: 'Pierre',
    telephone: '+33634567890',
    role: 'Patient',
    isActive: true,
    token: 'patient_token_789',
    refreshToken: 'patient_refresh_token_789',
    expiresIn: 3600
  }
];



