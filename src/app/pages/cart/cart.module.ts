import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import {NbButtonModule, NbCardModule, NbLayoutModule, NbSelectModule} from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../Shared/shared.module';


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
    NbButtonModule
  ]
})
export class CartModule { }
