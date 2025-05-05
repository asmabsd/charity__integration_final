import { Component } from '@angular/core';
import { SponsoringService } from '../../services/services/sponsoring.service';
import { Router } from '@angular/router';
import { Sponsoring } from '../../services/models/sponsoring.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-addsponsorfront',
  imports: [CommonModule,FormsModule],
  templateUrl: './addsponsorfront.component.html',
  styleUrl: './addsponsorfront.component.scss'
})
export class AddsponsorfrontComponent {
    yourLabelText: string = 'Default Label Text';
  
    sponsoring: Sponsoring = {
      idSponsoring: 0,
      project_id: 0,
      date_signature: '',
      numerotel: '+21653770600', // 👈 default value here
      montant_approuvee: 0,
      contrat: '',
      projects: []
    };
  
    successMessage = '';
    errorMessage = '';
  
    constructor(private sponsoringService: SponsoringService, private router: Router) {
      this.sponsoring.numerotel = '+21653770600';

    }
  
    addSponsoring(): void {
      this.sponsoringService.createSponsoring(this.sponsoring).subscribe(
        () => {
          this.successMessage = 'Sponsoring ajouté avec succès !';
          this.router.navigate(['/sponsorfrontliste']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du sponsoring :', error);
          this.errorMessage = 'Erreur lors de l\'ajout du sponsoring.';
        }
      );
      this.router.navigate(['/sponsorfrontliste']);

    }

    goToList() {
      this.router.navigate(['/sponsorfrontliste']);
    }
  }
  