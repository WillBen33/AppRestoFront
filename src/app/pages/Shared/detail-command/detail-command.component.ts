import { Component, Input, OnInit } from '@angular/core';
import { Commande, CommandeProduct } from 'src/app/api/models';
import { CommandeProductControllerService } from 'src/app/api/services';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-detail-command',
  templateUrl: './detail-command.component.html',
  styleUrls: ['./detail-command.component.scss']
})
export class DetailCommandComponent implements OnInit {

  @Input()
  currentCommande : Commande = {} as Commande;
  groupedCommandesProducts : Array<Array<CommandeProduct>> = new Array();
  constructor(private shoppingCartService : ShoppingCartService,
     private commandeProductService : CommandeProductControllerService) {
       this.commandeProductService.getCommandeProductsByCommand({commandeId:this.currentCommande.id!})
       .subscribe(commandeProducts => this.groupedCommandesProducts = 
        this.shoppingCartService.getCommandeProductByKeyAndCommentArrays(this.shoppingCartService.getGroupedCommandeProductFromList(commandeProducts)))
      }

  ngOnInit(): void {
    
  }

  getCurrentCommandeProduct(commandesProducts : Array<CommandeProduct>)
  {
    return commandesProducts[0];
  }

  getCurrentCommandeProductsPrice(commandesProducts : Array<CommandeProduct>)
  {
    return commandesProducts[0]?.product?.price! * commandesProducts.length;
  }

  getTotalPrice()
  {
    let totalPrice = 0;
    this.groupedCommandesProducts.forEach(value => 
    totalPrice += value.length * value[0].product.price! )
     return  totalPrice;
  }

}
