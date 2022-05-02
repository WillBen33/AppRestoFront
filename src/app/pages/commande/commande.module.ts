import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbLayoutModule, NbSelectModule, NbTooltipModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../Shared/shared.module';
import { CartComponent } from './cart/cart.component';
import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande/commande.component';
import { HeatThePaymentCardComponent } from './heat-the-payment-card/heat-the-payment-card.component';


@NgModule({
  declarations: [
    CommandeComponent,
    CartComponent,
    HeatThePaymentCardComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    FormsModule,
    NbCardModule,
    SharedModule,
    NbLayoutModule,
    NbButtonModule,
    NbSelectModule,
    MatDividerModule,
    FontAwesomeModule,
    NbInputModule,
    NbIconModule,
    NbCheckboxModule,
    NbTooltipModule
  ]
})
export class CommandeModule { }
