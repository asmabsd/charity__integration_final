import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from '../services/models/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingServiceService {
  private apiUrl = 'http://localhost:8081/api/trainings'; // ✅ chemin aligné avec ton backend

  constructor(private http: HttpClient) {}

  createTraining(training: any): Observable<any> {
    return this.http.post<Training>(this.apiUrl, training); // ✅ POST vers /api/trainings
  }

  getAllTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(this.apiUrl);
  }

  getTrainingById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateTraining(training: Training): Observable<Training> {
    return this.http.put<Training>(`${this.apiUrl}/${training.id}`, training);
  }

  deleteTraining(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
