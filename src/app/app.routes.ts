import { Routes } from '@angular/router';

import { ListDemandeComponent } from './features/private/list-demande/list-demande.component';
import { LoginComponent } from './features/public/login/login.component';
import { PrivateComponent } from './features/private/private.component';
import { PublicComponent } from './features/public/public.component';
import { CreatePatientComponent } from './features/public/create-patient/create-patient.component';


export const routes: Routes = [
     
      {
        path:'gest-rv',
          component:PrivateComponent,
          children:[
            {
              path:'list-drv',
              component:ListDemandeComponent
            },
            {
            path:'',
             redirectTo:'list-drv',
             pathMatch:'full'
          }

        ]
      }
      ,
      {
        path:'public',
        component:PublicComponent,
        children:[  
          {
            path:"create-patient",
            component:CreatePatientComponent
          },  
          {
            path:"login",
            component:LoginComponent
          },
          {
            path:'',
             redirectTo:'/login',
             pathMatch:'full'
          }

        ]
      },
      
       {
        path:'',
        redirectTo:"/public/login",
        pathMatch:'full'
      },
  
 
];
