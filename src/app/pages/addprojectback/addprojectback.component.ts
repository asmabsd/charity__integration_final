


import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/services/project.service';
import { Project } from '../../services/models/project.model';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-addprojectback',
  imports: [FormsModule, CommonModule],
  templateUrl: './addprojectback.component.html',
  styleUrl: './addprojectback.component.scss'
})
export class AddprojectbackComponent {
  project: Project = {
    titre: '',
    associationId: 1,
    dateSignature: '', // Initially set as empty string
    budget: 0,
    type_sponsoring: 'MATERIEL',
    projectStatus: 'OUVERT',
    sponsorings: [],
    convertedBudget: undefined
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private projectService: ProjectService, private router: Router) {}

  onSubmit(): void {
    if (!this.project.titre || !this.project.dateSignature || this.project.budget <= 0) {
      this.errorMessage = 'Title, signature date, and budget are required.';
      return;
    }
  
    // Convert dateSignature to the correct format (YYYY-MM-DD)
    const formattedDate = this.formatDate(this.project.dateSignature);
    this.project.dateSignature = formattedDate;
  
    this.projectService.createProject(this.project).subscribe({
      next: (res) => {
        this.successMessage = 'Project added successfully!';
        this.errorMessage = '';
        this.project = {
          projectId: 0,
          titre: '',
          associationId: 1,
          dateSignature: '',
          budget: 0,
          type_sponsoring: 'MATERIEL',
          projectStatus: 'OUVERT',
          sponsorings: [],
          convertedBudget: undefined
        };
        // Optional redirection
        this.router.navigate(['/dashboard/listeprojects']);
      },
      error: (err) => {
        this.errorMessage = 'Failed to add project.';
        console.error(err);
      }
    });
  }

  

  goToList() {
    this.router.navigate(['/projectliste']); 
  }
  
  formatDate(date: string): string {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;  // Returns date in 'YYYY-MM-DD' format
  }}