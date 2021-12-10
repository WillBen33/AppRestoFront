/* tslint:disable */
/* eslint-disable */
import { Product } from './product';
export interface Allergen {
  id?: number;
  libelle: string;
  products?: Array<Product>;
}
