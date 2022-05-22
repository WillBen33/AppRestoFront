import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AllergenEditComponent } from './allergen/allergen-edit/allergen-edit.component';
import { AllergenListComponent } from './allergen/allergen-list/allergen-list.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children : [
      {
        path:'products',
        component: ProductListComponent
      },
      {
        path:'products/edit',
        component: EditProductComponent
      },
      {
        path: 'allergens',
        component: AllergenListComponent
      },
      {
        path:'allergens/edit',
        component: AllergenEditComponent
      },
      {
        path: 'categories',
        component: CategoryListComponent
      },
      {
        path:'categories/edit',
        component: CategoryEditComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
