export interface Project {
    convertedBudget: any;
    projectId?: number;
    titre: string;
    associationId: number;
    dateSignature: string; 
    budget: number;
    type_sponsoring: 'MATERIEL' | 'FINANCIERE';
    projectStatus: 'OUVERT' | 'EN_ATTENTE' | 'FERME';
    sponsorings?: any[];
  }
  