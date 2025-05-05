import { Component, OnInit } from '@angular/core';
import { OpportunityServiceService } from '../serviceOpportunity/opportunity-service.service';
import { Opportunity } from '../services/models/opportunity';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-opportunity',
  imports: [
    CommonModule, // ✅ add this
    // ...other modules
  ],
  templateUrl: './view-opportunity.component.html',
  styleUrls: ['./view-opportunity.component.css']
})
export class ViewOpportunityComponent implements OnInit {
  opportunities: Opportunity[] = []; 
  errorMessage: string = '';

  constructor(
    private opportunityService: OpportunityServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllOpportunities();
  }

  getAllOpportunities(): void {
    this.opportunityService.getAllOpportunities().subscribe(
      (data: Opportunity[]) => {
        this.opportunities = data;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des opportunités:', error);
        this.errorMessage = "Une erreur s'est produite lors du chargement des opportunités.";
      }
    );
  }

  goToEdit(id: number): void {
    if (id) {
      this.router.navigate(['/edit-opportunity', id]);
    }
  }

  deleteOpportunity(id: number | undefined): void {
    if (id === undefined) {
      console.error("L'ID de l'opportunité est manquant.");
      return;
    }

    if (confirm('Êtes-vous sûr de vouloir supprimer cette opportunité ?')) {
      this.opportunityService.deleteOpportunity(id).subscribe(
        () => {
          this.opportunities = this.opportunities.filter(opportunity => opportunity.id !== id);
          alert('Opportunité supprimée avec succès !');
        },
        (error: any) => {
          console.error('Erreur lors de la suppression de l\'opportunité:', error);
          this.errorMessage = "Une erreur s'est produite lors de la suppression de l'opportunité.";
        }
      );
    }
  }
}