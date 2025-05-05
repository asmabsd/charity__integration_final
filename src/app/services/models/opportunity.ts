/* tslint:disable */
/* eslint-disable */
/* Code généré par ng-openapi-gen DO NOT EDIT. */

import { User } from '../models/user.model';
export interface Opportunity {
  category?: 'EMPLOI' | 'FORMATION' | 'STAGE' | 'BÉNÉVOLAT';
  datePosted: string;
  deadline: string;
  description: string;
  id?: number;
  location: string;
  postedBy?: User;
  title: string;
  type?: 'FULL_TIME' | 'PART_TIME' | 'REMOTE' | 'HYBRID';

  aiScore?: number; // Added aiScore property

}
