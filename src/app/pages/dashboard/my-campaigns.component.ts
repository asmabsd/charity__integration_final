// src/app/pages/dashboard/my-campaigns.component.ts
import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../services/services/campaign.service';
import { Campaign } from '../../services/models/campaign.model';
import { Router } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-campaigns',
  templateUrl: './my-campaigns.component.html',
  imports: [CurrencyPipe,CommonModule],
})
export class MyCampaignsComponent implements OnInit {
  campaigns: Campaign[] = [];

  constructor(private svc: CampaignService, private router: Router,
    private http: HttpClient // Inject HttpClient

  ) {}

  ngOnInit() {
    this.svc.getMine().subscribe({
      next: (campaigns) => {
        console.log('📦 My Campaigns:', campaigns); // ✅ Console log
        this.campaigns = campaigns;
      },
      error: (err) => {
        console.error('❌ Failed to load campaigns:', err);
      }
    });  }

  navigateToNewCampaign() {
    this.router.navigate(['dashboard/campaigns/new']);
  }

  navigateToEditCampaign(id: string) {
    this.router.navigate(['dashboard/campaigns', id, 'edit']);
  }

  delete(c: Campaign) {
    if (!confirm('Delete this campaign?')) return;
    this.svc.delete(c.id).subscribe(() =>
      this.campaigns = this.campaigns.filter(x => x.id !== c.id)
    );
  }

  predictDays(campaign: any) {
    const apiUrl = 'http://127.0.0.1:5000/predict'; // Update if hosted elsewhere

    const payload = {
      target_amount: campaign.targetAmount,
      current_amount: campaign.currentAmount,
      has_image: campaign.hasImage ? 1 : 0, // ensure int
      description_length: campaign.description?.length || 0
    };
    console.log("🔍 Payload envoyé :", payload); // ← ICI


    this.http.post<any>(apiUrl, payload).subscribe({
      next: (res) => {
        console.log(payload);

        campaign.predictedDays = Math.round(res.predicted_days_to_target);
      },
      error: (err) => {
        console.error('❌ Prediction failed:', err);
        alert('Prediction error: ' + err.error?.error || 'Unknown error');
      }
    });
  }
}
