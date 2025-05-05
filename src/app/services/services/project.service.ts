import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model'; // Assurez-vous d'avoir un modèle pour Project
import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { map, BehaviorSubject, Observable } from 'rxjs';
import { ProjectStats} from '../models/ProjectStats.model'; // Assurez-vous d'avoir un modèle pour Project

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private baseUrl = 'http://localhost:8081/projects'; 

  constructor(private http: HttpClient) {
    this.generativeAI = new GoogleGenerativeAI('AIzaSyAjQ9ab1ReJPH3IBR8-IYrLeHaj3Rs_8e4');

  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.baseUrl}/add-project`, project);
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/get-projects`);
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/get-project/${id}`);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.baseUrl}/put-project/${project.projectId}`, project);
  }
 

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete-project/${id}`);
  }

  private apiUrl = 'https://v6.exchangerate-api.com/v6';
 // Example API
  private apiKey = 'f539f8f4abb991825a45d300'; // Your API key
  private baseCurrency = 'EUR'; // Base currency is EUR
  

  private tauxChange = 0.30; // Exemple : 1 TND = 0.30 EUR (à ajuster dynamiquement éventuellement)

  convertToEuro(tnd: number): number {
    return +(tnd * this.tauxChange).toFixed(2); // conversion et arrondi à 2 décimales
  }

  setTaux(taux: number) {
    this.tauxChange = taux;
  }

  getTaux(): number {
    return this.tauxChange;
  }





  convert(from: 'EUR', to: string): Observable<any> {
    const url = `${this.apiUrl}/${this.apiKey}/pair/${from}/${to}`;
    return this.http.get(url);
  }


  private generativeAI: GoogleGenerativeAI;

  private messageHistory: BehaviorSubject<any> = new BehaviorSubject(null);
 

  async generateText(prompt: string) {
    const model = this.generativeAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    this.messageHistory.next({
      from: 'user',
      message: prompt
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    this.messageHistory.next({
      from: 'bot',
      message: text
    })
  }

  public getMessageHistory(): Observable<any> {
    return this.messageHistory.asObservable();
  }

  private apiUrl2 = 'http://localhost:8081/projects/stats';


  getStatistics(): Observable<ProjectStats> {
    return this.http.get<ProjectStats>(this.apiUrl2);
  }

  updateProjectStatus(projectId: number, newStatus: 'OUVERT' | 'FERME'): Observable<any> {
    return this.http.patch(`http://localhost:8081/projects/status/${projectId}`, { status: newStatus });
  }

}
