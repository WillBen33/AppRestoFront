import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbSelectModule, NbTooltipModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../Shared/shared.module';
import { CartComponent } from './cart/cart.component';
import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande/commande.component';
import { HeatThePaymentCardComponent } from './heat-the-payment-card/heat-the-payment-card.component';
import { CommandeListComponent } from './commande-list/commande-list.component';


@NgModule({
  declarations: [
    CommandeComponent,
    CartComponent,
    HeatThePaymentCardComponent,
    CommandeListComponent
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
    NbTooltipModule,
    NbListModule,
    NbAccordionModule
  ]
})
export class CommandeModule { }
