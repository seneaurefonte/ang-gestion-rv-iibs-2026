import { Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { ListDemandeComponent } from './demande/list-demande/list-demande.component';

export const PRIVATE_ROUTES: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'list-demande',
        component: ListDemandeComponent
      },
      {
        path: '',
        redirectTo: 'list-demande',
        pathMatch: 'full'
      }
    ]
  }
];
