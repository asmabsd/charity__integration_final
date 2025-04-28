// src/app/pages/donation-campaigns/donation-campaigns-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationCampaignsComponent } from './donation-campaigns.component';
import { CampaignDetailComponent } from './campaign-detail.component';
import { CampaignFormComponent } from './campaign-form.component';

const routes: Routes = [
  { path: '', component: DonationCampaignsComponent },
  { path: 'new', component: CampaignFormComponent },
  { path: ':id', component: CampaignDetailComponent },
  { path: ':id/edit', component: CampaignFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationCampaignsRoutingModule {}
