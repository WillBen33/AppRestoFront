/* tslint:disable */
/* eslint-disable */
import { Commande } from './commande';
import { User } from './user';
export interface Invoice {
  commande: Commande;
  createdAt: string;
  id?: number;
  reference: string;
  user: User;
}
