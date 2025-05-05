import { Component,  OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-avis',
  imports: [CommonModule,FormsModule,NgxPaginationModule],
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css'],
})
export class AvisComponent implements OnInit {
  reviews: any[] = [];
  newReview: any = {};
  searchQuery: string = '';
  filterCategory: string = '';
  uniqueCategories: string[] = [];
  page: number = 1;
  pageSize: number = 6;
  searchToken: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.showReviews();
  }

  showReviews() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.searchToken || this.newReview.token}`,
    });
    this.http.get<any[]>('http://localhost:8081/avis/get-avis', { headers }).subscribe((data) => {
      this.reviews = data;
      this.uniqueCategories = [...new Set(this.reviews.map((review) => review.categories))];
    });
  }

  addReview() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.newReview.token}`,
    });
    this.http.post('http://localhost:8081/avis/add-avis', this.newReview, { headers }).subscribe(() => {
      this.showReviews();
      this.newReview = {};
    });
  }

  get filteredReviews() {
    let filtered = this.reviews;

    if (this.searchQuery) {
      filtered = filtered.filter((review) =>
        review.contenue.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    if (this.filterCategory) {
      filtered = filtered.filter((review) => review.categories === this.filterCategory);
    }

    return filtered;
  }
}