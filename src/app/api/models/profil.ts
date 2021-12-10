/* tslint:disable */
/* eslint-disable */
import { Role } from './role';
import { User } from './user';
export interface Profil {
  id?: number;
  name: string;
  roles?: Array<Role>;
  users?: Array<User>;
}
