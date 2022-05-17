import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { Commande, CommandeProduct } from 'src/app/api/models';
import { CommandeControllerService, CommandeProductControllerService } from 'src/app/api/services';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.scss']
})
export class CommandeListComponent implements OnInit {

  commandes$: Observable<Array<Commande>> = new Observable();
  commandesProducts: Array<Array<CommandeProduct>> = new Array();
  constructor(private commandeService: CommandeControllerService,
    private commandeProductService: CommandeProductControllerService,
    private shoppingCartService: ShoppingCartService,
    private nbAuthService: NbAuthService) {
    this.commandes$ = this.nbAuthService.getToken().pipe(
      switchMap(jwtToken => this.commandeService.getCustomerCommandes({ email: jwtToken.getPayload().sub })
      ));
  }

  ngOnInit(): void {

  }

  getCommandeProducts(commande: Commande) {

   this.commandeProductService.getCommandeProductsByCommand({ commandeId: commande.id! }).
      subscribe( commandesProducts => 
          this.commandesProducts = this.shoppingCartService.getCommandeProductByKeyAndCommentArrays
            (this.shoppingCartService.getGroupedCommandeProductFromList(commandesProducts)))
  }



}
