import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth/guards/auth-guard.service';
import { CartComponent } from './cart/cart.component';
import { CommandeListComponent } from './commande-list/commande-list.component';
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
    path:'commandeList',
    component:CommandeListComponent,
    canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
