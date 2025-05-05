import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Opportunity } from '../services/models/opportunity'
@Injectable({
  providedIn: 'root',
})
export class OpportunityServiceService {
  private apiUrl = 'http://localhost:8081/api/opportunities'; // URL de l'API backend

  constructor(private http: HttpClient) {}

  // 📌 Vérification des mauvais mots
  private containsBadWords(text: string): boolean {
    const badWords = ['putain', 'merde', 'salope', 'abruti', 'con']; // Liste des mots interdits
    const lowerText = text.toLowerCase();
    return badWords.some((word) => lowerText.includes(word));
  }

  // 📌 Récupérer toutes les opportunités
  getAllOpportunities(): Observable<Opportunity[]> {
    return this.http.get<Opportunity[]>(`${this.apiUrl}/retrieve-all`);
  }

  // 📌 Ajouter une nouvelle opportunité
  createOpportunity(opportunity: Opportunity): Observable<Opportunity> {
    if (
      this.containsBadWords(opportunity.title) ||
      this.containsBadWords(opportunity.description)
    ) {
      return new Observable((observer) => {
        observer.error('La description ou le titre contient des mots interdits.');
      });
    }

    // Ajout des informations de l'utilisateur dans l'opportunité
    opportunity.postedBy = {
      id: 1,
      email: 'hh@j.n',
      first_name: 'ggg',
      last_name: 'ffggb',
      password: 'gfgfgh',
      password_reset_token: 'gfgf',
      role: 'ASSOCIATION',
      enabled: 0, // Valeur de l'utilisateur (actif ou non)
      phonenumber: '2565256', // Si tu veux inclure le numéro de téléphone
    };

    // Retourner la requête POST
    return this.http.post<Opportunity>(`${this.apiUrl}/add-opp`, opportunity);
  }

  // 📌 Récupérer une opportunité par ID
  getOpportunityById(id: number): Observable<Opportunity> {
    return this.http.get<Opportunity>(`${this.apiUrl}/retrieve/${id}`);
  }

  // 📌 Modifier une opportunité existante
  updateOpportunity(id: number, opportunity: Partial<Opportunity>): Observable<any> {
    console.log('Updating opportunity:', opportunity); // Pour le débogage
    return this.http.put(`${this.apiUrl}/update/${id}`, opportunity);
  }

  // 📌 Supprimer une opportunité
  deleteOpportunity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/supprimer/${id}`);
  }
}
