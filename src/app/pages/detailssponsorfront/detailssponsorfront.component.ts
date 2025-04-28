import { Component, OnInit } from '@angular/core';
import { SponsoringService } from '../../services/services/sponsoring.service';
import { Sponsoring } from '../../services/models/sponsoring.model';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-detailssponsorfront',
  imports: [CommonModule,FormsModule],
  templateUrl: './detailssponsorfront.component.html',
  styleUrl: './detailssponsorfront.component.scss'
})
export class DetailssponsorfrontComponent implements OnInit {
  sponsoring: Sponsoring;
  errorMessage: string = '';

  constructor(
    private sponsoringService: SponsoringService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.sponsoring = {} as Sponsoring; // Initialize the sponsoring object
  }

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0); // Get the ID from the route parameter
    this.sponsoringService.getSponsoringById(id).subscribe(
      (response) => {
        this.sponsoring = response;
      },
      (error) => {
        this.errorMessage = 'Error loading sponsoring details.';
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/sponsorfrontliste']); // Navigate back to the list of sponsorings
  }
}
