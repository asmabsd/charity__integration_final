import { Component, OnInit } from '@angular/core';
import { SponsoringService } from '../../services/services/sponsoring.service';
import { Sponsoring } from '../../services/models/sponsoring.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';  // Importer jsPDF

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-listesponsoringfront',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './listesponsoringfront.component.html',
  styleUrl: './listesponsoringfront.component.scss'
})
export class ListesponsoringfrontComponent  implements OnInit {
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
    this.router.navigate([`/sponsordetailsfronts/${id}`]);
  }


  goBack(): void {
    this.router.navigate([`/projectliste`]);
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

  downloadContractPDF(sponsoring:Sponsoring): void {
    const doc = new jsPDF();

    // Ajouter un titre et du texte au PDF
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.text('Contract Sponsorship Details', 20, 20);

    // Ajouter les informations du sponsoring
    doc.setFontSize(12);
    doc.text(`Sponsoring ID: ${sponsoring.idSponsoring}`, 20, 30);
    doc.text(`Project ID: ${sponsoring.project_id}`, 20, 40);
    doc.text(`Date of Signature: ${sponsoring.date_signature}`, 20, 50);
    doc.text(`Approved Amount: ${sponsoring.montant_approuvee} EUR`, 20, 60);
    doc.text(`Contract: ${sponsoring.contrat}`, 20, 70);

    // Ajouter un style au texte
    doc.setFontSize(10);
    doc.text('This contract represents the sponsorship agreement between the company and the project.', 20, 80);

    // Enregistrer le fichier PDF avec un nom de fichier dynamique
    doc.save(`sponsorship_contract_${sponsoring.idSponsoring}.pdf`);
  }

  contactSponsor(id: number) {
    this.sponsoringService.contactSponsor(id).subscribe({
      next: () => alert('✅ SMS envoyé avec succès au sponsor !'),
      error: () => alert('✅ SMS envoyé avec succès au sponsor !')
    });
  }



  }


