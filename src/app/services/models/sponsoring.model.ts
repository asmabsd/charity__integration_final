import { Project } from "./project.model";

export interface Sponsoring {
    idSponsoring: number;
    project_id: number;
    date_signature: string; // This will be a string in the format "YYYY-MM-DD"
    montant_approuvee: number;
    contrat: string;
    numerotel?: String; 

    projects: Project[]; // Assuming the Project model exists
  }