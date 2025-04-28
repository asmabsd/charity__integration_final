// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MainComponent } from './pages/main/main.component';
import { AuthGuard } from './utils/keycloak/auth.guard';

export const routes: Routes = [
  // public landing
  { path: '', component: LandingComponent },

  // public campaigns
  {
    path: 'campaigns',
    loadChildren: () =>
      import('./pages/donation-campaigns/donation-campaigns.module')
        .then(m => m.DonationCampaignsModule)
  },

  // public blog
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/blog.module').then(m => m.BlogModule)
  },

  // protected dashboard
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },

  // protected chat
  {
    path: 'chat',
    component: MainComponent,
    canActivate: [AuthGuard]
  },




  {
    path: 'projectliste',
    component: ListprojectsfrontcomponentComponent,
    canActivate: [AuthGuard]
  },


  {
    path: 'listeprojectsfront',
    component: ListprojectsfrontcomponentComponent,
    canActivate: [AuthGuard]
  },
 

  {
    path: 'sponsorfront/:id',
    component: AddsponsoringComponent,
    canActivate: [AuthGuard]
  },

  
  {
    path: 'sponsorfrontliste',
    component: ListesponsoringfrontComponent,
    canActivate: [AuthGuard]
  },
  
  {
    path: 'detailsfrontprojects/:id',
    component: DetailsprojectfrontComponent,
   // canActivate: [AuthGuard]
  },
  

  
  {
    path: 'sponsordetailsfronts/:id',
    component: DetailssponsorfrontComponent,
    canActivate: [AuthGuard]
  },
  


  

 



  // fallback
  { path: '**', redirectTo: '' }
];
