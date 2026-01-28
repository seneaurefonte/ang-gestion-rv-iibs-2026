import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Vérifier si l'utilisateur est authentifié
    const isAuthenticated = true;
    
    if (!isAuthenticated) {
       this.router.navigate(['/public/login']);
       return false;
    }
    
    return true;
  }
}
