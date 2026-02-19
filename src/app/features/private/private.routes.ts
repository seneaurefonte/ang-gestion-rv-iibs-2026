import { Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { ListDemandeComponent } from './demande/list-demande/list-demande.component';
import { demandesResolver } from './demande/resolvers/demandes.resolver';

export const PRIVATE_ROUTES: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'list-demande',
        component: ListDemandeComponent,
        resolve: {
          demandes: demandesResolver
        }
      },
      {
        path: '',
        redirectTo: 'list-demande',
        pathMatch: 'full'
      }
    ]
  }
];
