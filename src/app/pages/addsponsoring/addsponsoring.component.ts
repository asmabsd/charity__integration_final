import { Component } from '@angular/core';
import { SponsoringService } from '../../services/services/sponsoring.service';
import { Router } from '@angular/router';
import { Sponsoring } from '../../services/models/sponsoring.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-addsponsoring',
  imports: [CommonModule,FormsModule],
  templateUrl: './addsponsoring.component.html',
  styleUrl: './addsponsoring.component.scss'
})
export class AddsponsoringComponent {





  sponsoring: Sponsoring = {
    idSponsoring: 0,
    project_id: 0,
    date_signature: '',
    montant_approuvee: 0,
    contrat: '',
    projects: []
  };

  successMessage = '';
  errorMessage = '';

  constructor(private sponsoringService: SponsoringService, private router: Router) {}

  addSponsoring(): void {
    this.sponsoringService.createSponsoring(this.sponsoring).subscribe(
      (newSponsoring) => {
        this.successMessage = 'Sponsoring added successfully!';
        this.sponsoring = {
          idSponsoring: 0,
          project_id: 0,
          date_signature: '',
          montant_approuvee: 0,
          contrat: '',
          projects: []
        };
        this.router.navigate(['/dashboard/listesponsoring']);
      },
      (error) => {
        console.error('Error adding sponsoring:', error);
        this.errorMessage = 'Failed to add sponsoring.';
      }
    );
  }

  
goToList() {
  this.router.navigate(['/projectliste']); // replace with your actual route
}
}


