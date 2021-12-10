/* tslint:disable */
/* eslint-disable */
import { Profil } from './profil';
export interface Role {
  id?: number;
  libelle: string;
  profils: Array<Profil>;
}
