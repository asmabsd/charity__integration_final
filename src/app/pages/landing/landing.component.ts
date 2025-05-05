import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DonationCampaignsComponent } from '../donation-campaigns/donation-campaigns.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { VideoComponent } from "../../components/video/video.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, CommonModule , NavbarComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {}
