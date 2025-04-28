
import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/services/project.service';
import { Project } from '../../services/models/project.model';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-detailsprojectback',
  imports: [CommonModule],
  templateUrl: './detailsprojectback.component.html',
  styleUrl: './detailsprojectback.component.scss'
})
export class DetailsprojectbackComponent implements OnInit {
  project: Project | null = null;
  loading = true;
  error: string = '';
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,  
    private router: Router        
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id'); 
    if (projectId) {
      this.fetchProjectById(Number(projectId));  
    } else {
      this.error = 'ID de projet non trouvé';
    }
  }

  fetchProjectById(id: number): void {
    this.projectService.getProjectById(id).subscribe({
      next: (data) => {
        this.project = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement du projet';
        this.loading = false;
      },
    });
  }

    backToList(): void {
      this.router.navigate(['/dashboard/listeprojects']);
  }
}
