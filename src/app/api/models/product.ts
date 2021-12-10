/* tslint:disable */
/* eslint-disable */
import { Allergen } from './allergen';
import { Category } from './category';
export interface Product {
  allergens?: Array<Allergen>;
  categories: Array<Category>;
  description: string;
  id?: number;
  libelle: string;
  price?: number;
}
