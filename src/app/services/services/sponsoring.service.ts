import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sponsoring } from '../models/sponsoring.model';

@Injectable({
  providedIn: 'root'
})
export class SponsoringService {
  private apiUrl = 'http://localhost:8081/sponsoring'; // Adjust this URL to your API endpoint

  constructor(private http: HttpClient) {}

  // Get all sponsorings
  getAllSponsorings(): Observable<Sponsoring[]> {
    return this.http.get<Sponsoring[]>(`${this.apiUrl}/get-sponsorings`);
  }

  // Get a specific sponsoring by ID
  getSponsoringById(id: number): Observable<Sponsoring> {
    return this.http.get<Sponsoring>(`${this.apiUrl}/get-sponsoring/${id}`);
  }

  // Add a new sponsoring
  createSponsoring(sponsoring: Sponsoring): Observable<Sponsoring> {
    return this.http.post<Sponsoring>(`${this.apiUrl}/add-sponsoring`, sponsoring);
  }

  // Update an existing sponsoring
  updateSponsoring(id: number, sponsoring: Sponsoring): Observable<Sponsoring> {
    return this.http.put<Sponsoring>(`${this.apiUrl}/put-sponsoring/${id}`, sponsoring);
  }

  // Delete a sponsoring
  deleteSponsoring(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-sponsoring/${id}`);
  }

  private baseUrl = 'http://localhost:8081/sponsoring';


  contactSponsor(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/contact/${id}`, null);
  }

}

