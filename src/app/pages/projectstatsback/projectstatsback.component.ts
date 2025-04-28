import { Component, NgModule, OnInit } from '@angular/core';
import { ProjectService } from '../../services/services/project.service';
import { Project } from '../../services/models/project.model';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { catchError, map, Observable, of } from 'rxjs';
import { ProjectStats } from '../../services/models/ProjectStats.model';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js'; // Use chart.js types
// Removed ChartsModule import as it is not exported by 'ng2-charts'


@Component({
  selector: 'app-projectstatsback',
  imports: [CommonModule ],
  templateUrl: './projectstatsback.component.html',
  styleUrl: './projectstatsback.component.scss'
})
export class ProjectstatsbackComponent implements OnInit {
  stats: ProjectStats | null = null;
  loading = true;
  error: string = '';

  constructor(private ps: ProjectService) {}

  ngOnInit(): void {
    this.ps.getStatistics().subscribe({
      next: (data) => {
        this.stats = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load statistics';
        this.loading = false;
      }
    });
  }

  get totalProjects(): number {
    if (!this.stats) return 0;
    return this.stats.ouvertProjects + this.stats.enAttenteProjects + this.stats.fermeProjects;
  }

  getProjectPercentage(value: number): number {
    return this.totalProjects ? (value / this.totalProjects) * 100 : 0;
  }

  get totalDeliveries(): number {
    if (!this.stats) return 0;
    return this.stats.pendingDeliveries + this.stats.inTransitDeliveries + this.stats.deliveredDeliveries;
  }

  getDeliveryPercentage(value: number): number {
    return this.totalDeliveries ? (value / this.totalDeliveries) * 100 : 0;
  }
}
