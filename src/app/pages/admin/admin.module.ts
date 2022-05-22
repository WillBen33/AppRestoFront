import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbContextMenuModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbSearchModule, NbSelectModule, NbSidebarModule, NbTableModule, NbUserModule } from '@nebular/theme';
import { AdminHeaderComponent } from './header/header.component';
import { AdminFooterComponent } from './footer/footer.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { OneColumnLayoutComponent } from './one-column/one-column.layout';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AllergenListComponent } from './allergen/allergen-list/allergen-list.component';
import { AllergenEditComponent } from './allergen/allergen-edit/allergen-edit.component';
import { SharedModule } from '../Shared/shared.module';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    OneColumnLayoutComponent,
    ProductListComponent,
    EditProductComponent,
    AllergenListComponent,
    AllergenEditComponent,
    CategoryListComponent,
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    AdminRoutingModule,
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
    TableModule,
    ButtonModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule,
    NgSelectModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    SharedModule,
  ]
})
export class AdminModule { }
