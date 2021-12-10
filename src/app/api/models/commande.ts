/* tslint:disable */
/* eslint-disable */
import { Product } from './product';
import { User } from './user';
export interface Commande {
  createdAt: string;
  id?: number;
  products: Array<Product>;
  user: User;
}
