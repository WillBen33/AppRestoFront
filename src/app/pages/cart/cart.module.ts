import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import {NbButtonModule, NbCardModule, NbLayoutModule, NbSelectModule} from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../Shared/shared.module';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    TranslateModule.forChild(),
    NbCardModule,
    SharedModule,
    NbLayoutModule,
    NbButtonModule,
    MatDividerModule
  ]
})
export class CartModule { }
