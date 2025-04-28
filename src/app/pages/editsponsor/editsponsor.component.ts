import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SponsoringService } from '../../services/services/sponsoring.service'; // Adjust the import path as needed
import { Sponsoring } from '../../services/models/sponsoring.model'; // Assuming you have a Sponsoring model
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editsponsor',
  imports: [CommonModule,FormsModule],
  templateUrl: './editsponsor.component.html',
  styleUrl: './editsponsor.component.scss'
})
export class EditsponsorComponent  implements OnInit {
  sponsoring: Sponsoring;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private sponsoringService: SponsoringService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.sponsoring = { 
      idSponsoring: 0, 
      project_id: 0, 
      date_signature: '', 
      montant_approuvee: 0, 
      contrat: '', 
      projects: [] 
    }; // Initialize the sponsoring object
  }

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') || 0); // Get the ID from the route parameter
    this.sponsoringService.getSponsoringById(id).subscribe(
      (response) => {
        this.sponsoring = response;
      },
      (error) => {
        this.errorMessage = 'Error loading sponsoring details.';
      }
    );
  }

  // Update sponsoring on form submit
  updateSponsoring(): void {
    const id = this.sponsoring.idSponsoring; // Assuming the ID is part of the sponsoring object
    this.sponsoringService.updateSponsoring(id, this.sponsoring).subscribe(
      (response) => {
        this.successMessage = 'Sponsoring updated successfully!';
        this.router.navigate(['/dashboard/listesponsoring']);
      },
      (error) => {
        this.errorMessage = 'There was an error updating the sponsoring.';
      }
    );
  }
}