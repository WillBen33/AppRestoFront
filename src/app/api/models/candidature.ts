/* tslint:disable */
/* eslint-disable */
import { JobOffer } from './job-offer';
export interface Candidature {
  createdAt: string;
  email: string;
  firstname: string;
  gender: 'HOMME' | 'FEMME';
  id?: number;
  jobOffer?: JobOffer;
  lastname: string;
  message?: string;
  phoneNumber: string;
}
