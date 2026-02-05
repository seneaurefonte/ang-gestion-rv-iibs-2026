import { User } from './user.model';

export interface UserLogin extends Omit<User, 'createdAt' | 'updatedAt'> {
  token?: string;
  refreshToken?: string;
  expiresIn?: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
    user: UserLogin;
    token: string;
    refreshToken: string;
    expiresIn: number;
}
