// src/app/pages/dashboard/dashboard.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule }    from './dashboard-routing.module';
import { DashboardComponent }        from './dashboard.component';
import { MyCampaignsComponent }      from './my-campaigns.component';
import { MyBlogsComponent }          from './my-blogs.component';

// bring in your form components so the router can render them
import { CampaignFormComponent } from '../donation-campaigns/campaign-form.component';
import { BlogFormComponent }     from '../blog/blog-form.component';
import { ListprojectbackComponent } from '../listprojectback/listprojectback.component';
import { EditprojectbackComponent } from '../editprojectback/editprojectback.component';
//import { AddprojectbackComponent } from '../addprojectback/addprojectback.component';
import { FormsModule } from '@angular/forms';
import { DetailsprojectbackComponent } from '../detailsprojectback/detailsprojectback.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdddeliverybackComponent } from '../adddeliveryback/adddeliveryback.component';
import { DeliverylistbackComponent } from '../deliverylistback/deliverylistback.component';
import { EditdeliverybackComponent } from '../editdeliveryback/editdeliveryback.component';
import { EditsponsorComponent } from '../editsponsor/editsponsor.component';
import { AddsponsorfrontComponent } from '../addsponsorfront/addsponsorfront.component';
import { ProjectstatsbackComponent } from '../projectstatsback/projectstatsback.component';
import { ListbackproComponent } from '../listbackpro/listbackpro.component';
import { ChatComponent } from '../chat/chat.component';

@NgModule({
  declarations: [
    // nothing here since they're all standalone/imported
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DashboardRoutingModule,
ListbackproComponent,
EditprojectbackComponent,
DetailsprojectbackComponent,
EditdeliverybackComponent,
    // these two are declared in their own modules,
    // but if they're standalone you can import them directly:
    CampaignFormComponent,
    ProjectstatsbackComponent,
    BlogFormComponent,
   EditprojectbackComponent,
 EditdeliverybackComponent,
AdddeliverybackComponent,
DeliverylistbackComponent,
EditsponsorComponent,
AddsponsorfrontComponent,
ChatComponent,
    // your list components
    MyCampaignsComponent,
    MyBlogsComponent,
    DashboardComponent
  ]
})
export class DashboardModule {}
