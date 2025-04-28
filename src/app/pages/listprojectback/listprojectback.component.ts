import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/services/project.service';
import { Project } from '../../services/models/project.model';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BlogService } from '../../services/services/blog.service';
import { BlogPost } from '../../services/models/blog-post.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProjectstatsbackComponent } from "../projectstatsback/projectstatsback.component"; 

@Component({
  selector: 'app-listprojectback',
  imports: [FormsModule,
    CommonModule, RouterModule, ProjectstatsbackComponent],
  templateUrl: './listprojectback.component.html',
  styleUrl: './listprojectback.component.scss'
   
})
export class ListprojectbackComponent {

  projects: Project[] = [];
  loading = true;
  error = '';

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.projectService.getAllProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des projets';
        this.loading = false;
      },
    });
  }

  viewProject(project: Project): void {
    this.router.navigate(['/projects', project.projectId]);
  }
  addProject() {
    this.router.navigate(['/dashboard/addproject']); 
  }

  editProject(project: Project): void {
    this.router.navigate(['/projects/edit', project.projectId]); 
  }

  deleteProject(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      this.projectService.deleteProject(id).subscribe({
        next: () => this.fetchProjects(),
        error: () => alert("Erreur lors de la suppression.")
      });
    }
  }


  updateStatus(projectId: number, newStatus: 'OUVERT' | 'FERME'): void {
    if (!projectId) return;
  
    this.projectService.updateProjectStatus(projectId, newStatus).subscribe({
      next: (updatedProject) => {
        // Mise à jour locale pour refléter immédiatement le changement
        const project = this.projects.find(p => p.projectId === projectId);
        if (project) {
          project.projectStatus = newStatus;
        }
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour du statut:', err);
      }
    });
  }
  ////dashboard/statsproject
}