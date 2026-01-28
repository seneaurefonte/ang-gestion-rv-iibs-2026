import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'gest-rv',
    pathMatch: 'full'
  },
  {
    path: 'gest-rv',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/private/private.routes').then(m => m.PRIVATE_ROUTES)
  },
  {
    path: 'public',
    loadChildren: () => import('./features/public/public.routes').then(m => m.PUBLIC_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'gest-rv'
  }
];
