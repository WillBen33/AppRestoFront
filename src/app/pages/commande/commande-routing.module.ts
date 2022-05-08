import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from '../Shared/success/success.component';
import { CartComponent } from './cart/cart.component';
import { CommandeComponent } from './commande/commande.component';
import { HeatThePaymentCardComponent } from './heat-the-payment-card/heat-the-payment-card.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'confirmCommande',
    component: CommandeComponent
  },
  {
    path: 'heatThePaymentCard',
    component: HeatThePaymentCardComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
