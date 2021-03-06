import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import {NbAccordionModule, NbButtonModule, NbCardModule, NbDialogModule, NbLayoutModule, NbTabsetModule} from '@nebular/theme';
import { MenuComponent } from './menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { SubcategoryListComponent } from './subcategory-list/subcategory-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [MenuComponent, SubcategoryListComponent, ProductListComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    NbTabsetModule,
    TranslateModule,
    NbCardModule,
    NbDialogModule.forChild(),
    NbLayoutModule,
    NbButtonModule,
    NbAccordionModule
  ]
})
export class MenuModule { }
