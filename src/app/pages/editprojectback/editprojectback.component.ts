import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/services/project.service';
import { Project } from '../../services/models/project.model';
import { Location } from '@angular/common'; // to go back to the previous page
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-editprojectback',
  imports: [FormsModule],
  templateUrl: './editprojectback.component.html',
  styleUrl: './editprojectback.component.scss'
})
export class EditprojectbackComponent implements OnInit {
  project: Project = {
    projectId: 0,
    titre: '',
    associationId: 0,
    dateSignature: '',
    budget: 0,
    type_sponsoring: 'MATERIEL',
    projectStatus: 'OUVERT',
    sponsorings: [],
    convertedBudget: undefined
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const projectId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchProject(projectId);
  }

  fetchProject(id: number): void {
    this.projectService.getProjectById(id).subscribe({
      next: (data) => {
        this.project = data;
      },
      error: (err) => {
        console.error('Error loading project', err);
      }
    });
  }

  updateProject(): void {
    this.projectService.updateProject(this.project).subscribe({
      next: (data) => {
        this.router.navigate(['/dashboard/listeprojects']);
      },
      error: (err) => {
        console.error('Error updating project', err);
      }
    });
  }
}