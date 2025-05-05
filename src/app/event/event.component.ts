import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-event',
    imports: [CommonModule,FormsModule,NgxPaginationModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  downloadTokenEvents: string = '';
  events: any[] = [];
  newEvent: any = {
    title: '',
    description: '',
    date: '',
    location: '', // Add location
    categories: '',
    token: '',
  };
  searchQuery: string = '';
  filterCategory: any = '';
  uniqueCategories: any[] = [];
  page: number = 1;
  pageSize: number = 6;
  searchToken: string = '';
  eventCategories: any[] = [
    'CONFERENCE',
    'WORKSHOP',
    'SEMINAR',
    'FESTIVAL',
    'CONCERT',
    'EXHIBITION',
    'SPORTS',
    'CHARITY_GALA',
    'COMMUNITY_MEETING',
    'EDUCATIONAL',
  ];

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) {} // Inject MatSnackBar

  ngOnInit(): void {
    this.showEvents();
  }

  showEvents() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.searchToken || this.newEvent.token}`,
    });
    this.http.get<any[]>('http://localhost:8081/event/get-events', { headers }).subscribe(
      (data) => {
        this.events = data;
        this.uniqueCategories = [...new Set(this.events.map((event) => event.categories))];
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  downloadEventsReport() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.downloadTokenEvents}`,
    });
    this.http.get('http://localhost:8081/event/report/pdf', { headers, responseType: 'blob' }).subscribe(
      (response: Blob) => {
        saveAs(response, 'events_report.pdf');
      },
      (error) => {
        console.error('Error downloading events report:', error);
      }
    );
  }

  addEvent() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.newEvent.token}`,
    });
    this.http.post('http://localhost:8081/event/add-event', this.newEvent, { headers }).subscribe(
      () => {
        this.showEvents();
        this.newEvent = {
          title: '',
          description: '',
          date: '',
          location: '', //  Make sure this is an ID
          categories: '',
          token: '',
        };
        this.snackBar.open('Event added successfully!', 'Close', { duration: 3000 });
      },
      (error) => {
        if (error.error instanceof ErrorEvent) {
          this.snackBar.open('Error: ' + error.error.message, 'Close', { duration: 5000 });
        } else if (error.status === 400 && error.error.includes("Rainy weather")) {
          this.snackBar.open(error.error, 'Close', { duration: 10000 });
        }
        else {
          this.snackBar.open('Failed to add event', 'Close', { duration: 5000 });
        }
      }
    );
  }


  get filteredEvents() {
    let filtered = this.events;

    if (this.searchQuery) {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        event.status.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        event.categories.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    if (this.filterCategory) {
      filtered = filtered.filter((event) => event.categories === this.filterCategory);
    }

    return filtered;
  }

  viewEventDetails(id: number) {
    this.router.navigate(['/event-details', id]);
  }
}