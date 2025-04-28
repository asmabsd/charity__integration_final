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
