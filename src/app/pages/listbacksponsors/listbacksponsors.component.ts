import { Component, OnInit } from '@angular/core';
import { SponsoringService } from '../../services/services/sponsoring.service';
import { Sponsoring } from '../../services/models/sponsoring.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-listbacksponsors',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './listbacksponsors.component.html',
  styleUrl: './listbacksponsors.component.scss'
})
export class ListbacksponsorsComponent implements OnInit {
  sponsorings: Sponsoring[] = [];
  errorMessage = '';

  constructor(private sponsoringService: SponsoringService, private router: Router) {}

  ngOnInit(): void {
    this.loadSponsorings();
  }

  loadSponsorings(): void {
    this.sponsoringService.getAllSponsorings().subscribe(
      (data) => {
        this.sponsorings = data;
      },
      (error) => {
        console.error('Error loading sponsorings:', error);
        this.errorMessage = 'Failed to load sponsorings.';
      }
    );
  }

  viewSponsoring(id: number): void {
    this.router.navigate([`/dashboard/viewsponsoring/${id}`]);
  }

  editSponsoring(id: number): void {
    this.router.navigate([`/dashboard/editsponsoring/${id}`]);
  }

  //      { path: 'editsponsoring/:id', component: EditsponsorComponent },
  

  deleteSponsoring(sponsoring: Sponsoring): void {
    console.log('Sponsoring object before delete:', sponsoring);
    if (confirm('Are you sure you want to delete this sponsoring?')) {
      if (sponsoring.idSponsoring) {
        this.sponsoringService.deleteSponsoring(sponsoring.idSponsoring).subscribe(
          (response) => {
            console.log('Sponsoring deleted successfully', response);
          },
          (error) => {
            console.error('Error deleting sponsoring', error);
          }
        );
      } else {
        console.error('No valid idSponsoring found');
      }
    }
  }
  
  
}
