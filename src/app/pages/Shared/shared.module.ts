import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogMessageComponent } from './components/dialog-message/dialog-message.component';
import { NbAlertModule, NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { ExistPhoneNumberDirective } from './directives/exist-phone-number/exist-phone-number.directive';
import { ExistEmailDirective } from './directives/existEmail/exist-email.directive';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ProductSelectionDialogComponent } from './components/product-selection-dialog/product-selection-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';

const NB_MODULES = [
  NbInputModule,
  NbCardModule,
  NbLayoutModule,
  NbAlertModule,
  NbButtonModule,
  NbSelectModule
]

@NgModule({
  declarations: [
    DialogMessageComponent,
    ExistPhoneNumberDirective,
    ExistEmailDirective,
    ShoppingCartComponent,
    ProductSelectionDialogComponent,
    ShoppingCartItemComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    MatIconModule,
    MatButtonModule,
    NB_MODULES
  ],
  exports: [DialogMessageComponent, ExistPhoneNumberDirective, ExistEmailDirective, ShoppingCartComponent,ShoppingCartItemComponent]
})
export class SharedModule { }
