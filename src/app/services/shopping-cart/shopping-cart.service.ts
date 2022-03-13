import { Injectable } from '@angular/core';
import { CommandeProduct } from 'src/app/api/models';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() {
  }

  private getShoppingCart() {
    let shoppingCard = sessionStorage.getItem('shoppingCard');
    if (shoppingCard != null)
      return new Map<string, Array<CommandeProduct>>(JSON.parse(shoppingCard));
    return new Map<string, Array<CommandeProduct>>();
  }

  getNbProductInCart()
  {
    let total = 0;
    this.getShoppingCart().forEach(productList => {
      total += productList.length;
    });
    return total;
  }

  addToShoppingCart(commandeProduct: CommandeProduct, counter: number, oldComment: string) {
    let commandeProductMap: Map<string, Array<CommandeProduct>> = this.getShoppingCart();
    let commandeProductTab: Array<CommandeProduct> = commandeProductMap.get(commandeProduct.product.libelle) ?? new Array();
    commandeProductTab = commandeProductTab.filter(cmp => oldComment !== cmp.comment);
    for (let i = 0; i < counter; i++) {

      commandeProductTab.push(commandeProduct);
    }
    commandeProductMap.set(commandeProduct.product.libelle, commandeProductTab);
    sessionStorage.setItem('shoppingCard', JSON.stringify(Array.from(commandeProductMap)));
  }

  removeFromShoppingCart(commandeProduct: CommandeProduct) {
    let commandeProductMap: Map<string, Array<CommandeProduct>> = this.getShoppingCart();
    let commandeProductTab: Array<CommandeProduct> = commandeProductMap.get(commandeProduct.product.libelle) ?? new Array();
    commandeProductTab = commandeProductTab.filter(cmp => commandeProduct.comment !== cmp.comment);
    commandeProductMap.set(commandeProduct.product.libelle, commandeProductTab);
    sessionStorage.setItem('shoppingCard', JSON.stringify(Array.from(commandeProductMap)));
  }

  private sortCommandeProductByKeyAndComment() {
    let commandeProductMap: Map<string, Array<CommandeProduct>> = this.getShoppingCart();
    let groupByCommentMap: Map<string, any> = new Map();
    commandeProductMap.forEach((commandeProductArray, key) =>
      groupByCommentMap.set(key, groupBy(commandeProductArray, "comment")));
    return Array.from(groupByCommentMap.values());
  }

  getCommandeProductByKeyAndCommentArrays()
  {
    let arr = new Array();
    this.sortCommandeProductByKeyAndComment().forEach(
      reducedCommandeProduct => 
      arr = arr.concat(Object.values(reducedCommandeProduct))
    )
    return arr;
  }

}

function groupBy(tableauObjets: Array<any>, propriete: string) {
  return tableauObjets.reduce(function (acc, obj) {
    var cle = obj[propriete];
    if (!acc[cle]) {
      acc[cle] = [];
    }
    acc[cle].push(obj);
    return acc;
  }, {});
}
