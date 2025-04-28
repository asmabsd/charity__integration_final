// src/app/services/delivery.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Delivery } from '../models/delivery.model';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private apiUrl = 'http://localhost:8080/delivery';  // Adjust the URL to match your backend

  constructor(private http: HttpClient) {}

  // Get all deliveries
  getAllDeliveries(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(`${this.apiUrl}/get-deliveries`);
  }

  // Get a single delivery by ID
  getDeliveryById(id: number): Observable<Delivery> {
    return this.http.get<Delivery>(`${this.apiUrl}/get-delivery/${id}`);
  }

  // Create a new delivery
  createDelivery(delivery: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>(`${this.apiUrl}/add-delivery`, delivery);
  }

  // Update an existing delivery
  updateDelivery(id: number, delivery: Delivery): Observable<Delivery> {
    return this.http.put<Delivery>(`${this.apiUrl}/put-delivery/${id}`, delivery);
  }

  // Delete a delivery by ID
  deleteDelivery(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-delivery/${id}`);
  }
}
