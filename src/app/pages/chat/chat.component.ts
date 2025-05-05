
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/services/project.service';
import { Project } from '../../services/models/project.model';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { catchError, map, Observable, of } from 'rxjs';
@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  // Filtering properties
  filterAttribute: string = 'titre';
  searchTerm: string = '';
  sortBy: string = 'titre';
  sortDirection: string = 'asc';
  filteredProjects: Project[] = [];
  
  // Currency conversion properties
  currencies = ['EUR', 'USD', 'TND', 'GBP', 'CAD', 'JPY', 'CHF', 'CNY', 'SAR', 'AED'];
  selectedCurrency = 'USD';
  private apiUrl = 'https://v6.exchangerate-api.com/v6';
  private apiKey = 'f539f8f4abb991825a45d300';

  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 6;
  
  // Data properties
  projects: Project[] = [];
  loading = true;
  error: string = '';
  private conversionErrorMessages: string[] = [];

  // Chat properties
  prompt: string = '';
  messageHistory: any[] = [];

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private http: HttpClient
  ) {
    this.projectService.getMessageHistory().subscribe(messages => {
      if (messages) {
        this.messageHistory.push(messages);
      }
    });
  }

  ngOnInit(): void {
    this.fetchProjects();
  }

  // Fetch projects from service
  fetchProjects(): void {
    this.projectService.getAllProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.filteredProjects = [...this.projects];
        this.loading = false;
        this.applyFilters();
      },
      error: (err) => {
        this.error = 'Error loading projects';
        this.loading = false;
      },
    });
  }

  // Currency conversion methods
  convertToCurrency(amount: number, fromCurrency: string, toCurrency: string): Observable<number> {
    const url = `${this.apiUrl}/${this.apiKey}/pair/${fromCurrency}/${toCurrency}`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.error('Error fetching conversion rate:', error);
        return of(null);
      }),
      map((response: { conversion_rate?: number }) => {
        if (response?.conversion_rate) {
          return +(amount * response.conversion_rate).toFixed(2);
        }
        return amount;
      })
    );
  }

  convertProjectBudget(project: Project): void {
    this.convertToCurrency(project.budget, 'EUR', this.selectedCurrency).subscribe({
      next: (convertedBudget) => {
        project.convertedBudget = convertedBudget;
      },
      error: () => {
        alert('Error during budget conversion.');
      }
    });
  }

  // Filtering and sorting methods
  applyFilters(): void {
    let filtered = [...this.projects];
    
    // Apply search filter
    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(project => {
        const propValue = project[this.filterAttribute as keyof Project];
        
        if (typeof propValue === 'string') {
          return propValue.toLowerCase().includes(searchLower);
        } else if (typeof propValue === 'number') {
          return propValue.toString().includes(this.searchTerm);
        } else if (propValue instanceof Date) {
          return new Date(propValue).toLocaleDateString().includes(this.searchTerm);
        }
        return false;
      });
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      const valA = a[this.sortBy as keyof Project];
      const valB = b[this.sortBy as keyof Project];
      
      let comparison = 0;
      if (typeof valA === 'string' && typeof valB === 'string') {
        comparison = valA.localeCompare(valB);
      } else if (typeof valA === 'number' && typeof valB === 'number') {
        comparison = valA - valB;
      } else if (valA instanceof Date && valB instanceof Date) {
        comparison = valA.getTime() - valB.getTime();
      }
      
      return this.sortDirection === 'asc' ? comparison : -comparison;
    });
    
    this.filteredProjects = filtered;
    this.currentPage = 1; // Reset to first page when filters change
  }

  clearFilters(): void {
    this.filterAttribute = 'titre';
    this.searchTerm = '';
    this.sortBy = 'titre';
    this.sortDirection = 'asc';
    this.filteredProjects = [...this.projects];
  }

  // Navigation methods
  viewProject(project: Project): void {
    this.router.navigate(['/projects', project.projectId]);
  }

  addProject(): void {
    this.router.navigate(['/dashboard/addproject']);
  }

  editProject(project: Project): void {
    this.router.navigate(['/projects/edit', project.projectId]);
  }

  deleteProject(id: number): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id).subscribe({
        next: () => this.fetchProjects(),
        error: () => alert("Error during deletion.")
      });
    }
  }

  showChat: boolean = false;

  toggleChat() {
    this.showChat = !this.showChat;
  }
  

 


  generateResponse(): void {
    if (this.prompt.trim()) {
      this.projectService.generateText(this.prompt);
      this.messageHistory.push({ from: 'user', message: this.prompt });
      this.prompt = '';
    }
  }




  // Pagination methods
  get paginatedProjects(): Project[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProjects.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredProjects.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
}

 
  
