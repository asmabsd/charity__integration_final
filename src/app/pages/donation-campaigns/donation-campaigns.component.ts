import { CommonModule } from '@angular/common';
// src/app/pages/donation-campaigns/donation-campaigns.component.ts
import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../services/services/campaign.service';
import { Campaign } from '../../services/models/campaign.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-campaigns',
  templateUrl: './donation-campaigns.component.html',
  styleUrls: ['./donation-campaigns.component.scss'],
  imports: [CommonModule]
})
export class DonationCampaignsComponent implements OnInit {
  campaigns: Campaign[] = [];
  loading = false;
  error?: string;

  constructor(
    private svc: CampaignService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCampaigns();
  }

  private loadCampaigns(): void {
    this.loading = true;
    this.error = undefined;

    this.svc.getAll().subscribe({
      next: list => this.campaigns = list,
      error: () => this.error = 'Failed to load campaigns.',
      complete: () => this.loading = false
    });
  }

  viewCampaign(id: string): void {
    this.router.navigate(['/campaigns', id]);
  }
}
