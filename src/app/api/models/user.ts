/* tslint:disable */
/* eslint-disable */
import { Adress } from './adress';
import { Profil } from './profil';
export interface User {
  billingAdress: Adress;
  deliveryAdress: Adress;
  email: string;
  firstname: string;
  gender?: 'HOMME' | 'FEMME';
  id?: number;
  lastname: string;
  password: string;
  phoneNumber: string;
  profils?: Array<Profil>;
}
