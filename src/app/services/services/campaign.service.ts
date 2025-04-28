// src/app/services/services/campaign.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campaign } from '../models/campaign.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CampaignService {
  private base = `${environment.apiUrl}/campaigns`;

  constructor(private http: HttpClient) {}

  /** Everyone’s active campaigns */
  getAll(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.base);
  }

  /** The current user’s campaigns */
  getMine(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(`${this.base}/my-campaigns`);
  }

  getById(id: string): Observable<Campaign> {
    return this.http.get<Campaign>(`${this.base}/${id}`);
  }

  create(data: Partial<Campaign>): Observable<Campaign> {
    return this.http.post<Campaign>(this.base, data);
  }

  update(id: string, data: Partial<Campaign>): Observable<Campaign> {
    return this.http.put<Campaign>(`${this.base}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
