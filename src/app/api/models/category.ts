/* tslint:disable */
/* eslint-disable */
export interface Category {
  id?: number;
  name: string;
  parentCategory?: Category;
  subCategories?: Array<Category>;
}
