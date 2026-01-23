import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DemandeRvComponent } from './features/demande-rv/demande-rv.component';
import { FormDemandeComponent } from './features/demande-rv/form-demande/form-demande.component';

export const routes: Routes = [
     {
   path:"dash",
   component: DashboardComponent
   },
  {
   path:"form-demande",
   component: FormDemandeComponent
  },
 
];
