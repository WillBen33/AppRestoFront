import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from "@angular/material/icon";
import { NbAlertModule, NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from '@ngx-translate/core';
import { CommandeTypeDialogComponent } from './components/commande-type-dialog/commande-type-dialog.component';
import { DialogMessageComponent } from './components/dialog-message/dialog-message.component';
import { ProductSelectionDialogComponent } from './components/product-selection-dialog/product-selection-dialog.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from "@angular/router";
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ExistPhoneNumberDirective } from './directives/exist-phone-number/exist-phone-number.directive';
import { ExistEmailDirective } from './directives/existEmail/exist-email.directive';
import { ResumeCommandeComponent } from './resume-commande/resume-commande.component';
import { ProductDetailDialogComponent } from './components/product-detail-dialog/product-detail-dialog.component';

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
    CommandeTypeDialogComponent,
    ResumeCommandeComponent,
    ProductDetailDialogComponent,
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
    NB_MODULES,
    MatDividerModule
  ],
  exports: [DialogMessageComponent,
    ExistPhoneNumberDirective,
    ExistEmailDirective,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    ResumeCommandeComponent,
    CheckoutComponent]
})
export class SharedModule { }
