// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MainComponent } from './pages/main/main.component';
import { AuthGuard } from './utils/keycloak/auth.guard';
import { ListprojectsfrontcomponentComponent } from './pages/listprojectsfrontcomponent/listprojectsfrontcomponent.component';
import { AddsponsoringComponent } from './pages/addsponsoring/addsponsoring.component';
import { ListesponsoringfrontComponent } from './pages/listesponsoringfront/listesponsoringfront.component';
import { DetailsprojectfrontComponent } from './pages/detailsprojectfront/detailsprojectfront.component';
import { DetailssponsorfrontComponent } from './pages/detailssponsorfront/detailssponsorfront.component';
import { ContactComponent } from './contact/contact.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './pages/blog/blog-detail.component';
import { DonateComponent } from './donate/donate.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AvisComponent } from './avis/avis.component';
import { EventComponent } from './event/event.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarTrainingComponent } from './frontoffice/calendriertraining/calendar-training/calendar-training.component';
import { OpportunityComponent } from './frontoffice/opportunity/opportunity.component';
import { EditOpportunityComponent } from './edit-opportunity/edit-opportunity.component';
import { ViewOpportunityComponent } from './view-opportunity/view-opportunity.component';
import { TrainingComponent } from './frontoffice/training/training.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';

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

  {path:'qr',
    component:NgxScannerQrcodeComponent
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


  { path: 'contact', component: ContactComponent ,canActivate: [AuthGuard]},
  { path: 'caleNDAR', component: CalendarComponent ,canActivate: [AuthGuard]},
  { path: 'caleNDARtrain', component: CalendarTrainingComponent ,canActivate: [AuthGuard]},
  { path: 'how-it-works', component: HowItWorksComponent,canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent ,canActivate: [AuthGuard]},
  { path: 'blog', component: BlogComponent ,canActivate: [AuthGuard]},
  { path: 'blog_details', component: BlogDetailComponent ,canActivate: [AuthGuard]},
  { path: 'donate', component: DonateComponent , canActivate: [AuthGuard]},
  { path: 'opp', component: OpportunityComponent, canActivate: [AuthGuard]},

  { path: 'gallery', component: GalleryComponent , canActivate: [AuthGuard]},
  { path: 'edit-opportunity/:id', component: EditOpportunityComponent , canActivate: [AuthGuard]},
  { path: 'opportunity', component: OpportunityComponent , canActivate: [AuthGuard]},
  { path: 'viewopportunity', component: ViewOpportunityComponent, canActivate: [AuthGuard]},
  { path: 'training', component: TrainingComponent , canActivate: [AuthGuard]},
  { path: 'viewtraining', component: TrainingListComponent , canActivate: [AuthGuard]},
  { path: 'calendar', component: CalendarComponent , canActivate: [AuthGuard]} ,
  { path: 'calendar', component: CalendarComponent , canActivate: [AuthGuard]} ,
  { path: 'opportunity', component: CalendarComponent , canActivate: [AuthGuard]} ,

  { path: 'contact', component: ContactComponent , canActivate: [AuthGuard]},
  { path: 'how-it-works', component: HowItWorksComponent , canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  { path: 'blog', component: BlogComponent, canActivate: [AuthGuard]},
  { path: 'blog_details', component: BlogDetailComponent, canActivate: [AuthGuard]},
  { path: 'donate', component: DonateComponent, canActivate: [AuthGuard]},
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard]},
  { path: 'avis', component: AvisComponent, canActivate: [AuthGuard]},
  { path: 'events', component: EventComponent , canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},



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
   canActivate: [AuthGuard]
  },
  

  
  {
    path: 'sponsordetailsfronts/:id',
    component: DetailssponsorfrontComponent,
    canActivate: [AuthGuard]
  },
  


  

 



  // fallback
  { path: '**', redirectTo: '' }
];
