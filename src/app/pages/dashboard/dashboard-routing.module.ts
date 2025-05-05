// src/app/pages/dashboard/dashboard-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MyCampaignsComponent } from './my-campaigns.component';
import { MyBlogsComponent } from './my-blogs.component';

// point at your existing form components
import { CampaignFormComponent } from '../donation-campaigns/campaign-form.component';
import { BlogFormComponent }     from '../blog/blog-form.component';
import { DetailsprojectbackComponent } from '../detailsprojectback/detailsprojectback.component';
import { EditprojectbackComponent } from '../editprojectback/editprojectback.component';
import { ListprojectbackComponent } from '../listprojectback/listprojectback.component';
import { AddprojectbackComponent } from '../addprojectback/addprojectback.component';
import { DeliverylistbackComponent } from '../deliverylistback/deliverylistback.component';
import { AdddeliverybackComponent } from '../adddeliveryback/adddeliveryback.component';
import { ViewdeliverybackComponent } from '../viewdeliveryback/viewdeliveryback.component';
import { EditdeliverybackComponent } from '../editdeliveryback/editdeliveryback.component';
import { AddsponsoringComponent } from '../addsponsoring/addsponsoring.component';
import { ListbacksponsorsComponent } from '../listbacksponsors/listbacksponsors.component';
import { EditsponsorComponent } from '../editsponsor/editsponsor.component';
import { ViewsponsorComponent } from '../viewsponsor/viewsponsor.component';
import { ProjectstatsbackComponent } from '../projectstatsback/projectstatsback.component';
import { ListbackproComponent } from '../listbackpro/listbackpro.component';
import { EventComponent } from '../../event/event.component';
import { AvisComponent } from '../../avis/avis.component';
import { CalendarTrainingComponent } from '../../frontoffice/calendriertraining/calendar-training/calendar-training.component';
import { HowItWorksComponent } from '../../how-it-works/how-it-works.component';
import { AboutComponent } from '../../about/about.component';
import { DonateComponent } from '../../donate/donate.component';
import { OpportunityComponent } from '../../frontoffice/opportunity/opportunity.component';
import { GalleryComponent } from '../../gallery/gallery.component';
import { EditOpportunityComponent } from '../../edit-opportunity/edit-opportunity.component';
import { ViewOpportunityComponent } from '../../view-opportunity/view-opportunity.component';
import { transition } from '@angular/animations';
import { TrainingCalenderComponent } from '../../training-calender/training-calender.component';
import { TrainingListComponent } from '../../training-list/training-list.component';
import { CalendarComponent } from '../../calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      // campaigns list + form/edit
      { path: 'campaigns',          component: MyCampaignsComponent },
      { path: 'campaigns/new',      component: CampaignFormComponent },
      { path: 'campaigns/:id/edit', component: CampaignFormComponent },

      { path: 'editdelivery/:id', component: EditdeliverybackComponent },
      { path: 'viewdelivery/:id', component: ViewdeliverybackComponent},

      // blogs list + form/edit
      { path: 'blogs',          component: MyBlogsComponent },
      { path: 'blogs/new',      component: BlogFormComponent },
      { path: 'blogs/:id/edit', component: BlogFormComponent },
      { path: 'projects/add', component:  AddprojectbackComponent},
      { path: 'deliverylist', component:  DeliverylistbackComponent},
      { path: 'adddelivery', component: AdddeliverybackComponent },
      { path: 'addsponsor', component: AddsponsoringComponent },
      { path: 'listesponsoring', component: ListbacksponsorsComponent },
      { path: 'editsponsoring/:id', component: EditsponsorComponent },
      { path: 'viewsponsoring/:id', component: ViewsponsorComponent },
      { path: 'events', component: EventComponent },
      { path: 'avis', component: AvisComponent },

      
      
        { path: 'how-it-works', component: HowItWorksComponent },
        { path: 'donate', component: DonateComponent},
        { path: 'opp', component: OpportunityComponent},
      
        { path: 'gallery', component:GalleryComponent },
        { path: 'edit-opportunity/:id', component: EditOpportunityComponent },
        { path: 'opportunity', component: OpportunityComponent },
        { path: 'viewopportunity', component: ViewOpportunityComponent},
        { path: 'training', component: TrainingCalenderComponent},
        { path: 'viewtraining', component: TrainingListComponent },
        { path: 'calendar', component: CalendarComponent} ,
        { path: 'calendar', component: CalendarComponent } ,
        { path: 'opportunity', component: CalendarComponent } ,
      
        { path: 'how-it-works', component: HowItWorksComponent },
        { path: 'about', component: AboutComponent},
        { path: 'donate', component: DonateComponent},
        { path: 'gallery', component: GalleryComponent},
        { path: 'avis', component: AvisComponent},
        { path: 'events', component: EventComponent },
        { path: 'dashboard', component: DashboardComponent },
      
      
      


      { path: 'projects/:id', component:  DetailsprojectbackComponent},
{ path: 'projects/edit/:id', component: EditprojectbackComponent},
{ path: 'listeprojects', component: ListbackproComponent },

{ path: 'statsproject', component: ProjectstatsbackComponent },

      // default to campaigns
      { path: '', redirectTo: 'campaigns', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
