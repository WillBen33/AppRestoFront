import { Injectable } from '@angular/core';
import { CommandeProduct } from 'src/app/api/models';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() {
  }

  private getShoppingCart() {
    let shoppingCard = localStorage.getItem('shoppingCard');
    if (shoppingCard != null)
      return new Map<string, Array<CommandeProduct>>(JSON.parse(shoppingCard));
    return new Map<string, Array<CommandeProduct>>();
  }

  getNbProductInCart() {
    let total = 0;
    this.getShoppingCart().forEach(productList => {
      total += productList.length;
    });
    return total;
  }

  getShoppingCartProductValue() {
    let total = 0;
    this.getShoppingCart().forEach(productList => total += (productList[0].product.price ?? 0) * productList.length);
    return total;
  }

  getShoppingCartDeliveryValue() {
    if (this.getCommadeType() != null && this.getCommadeType() === "DELIVERY")
      return (this.getShoppingCartProductValue() * 2.5) / 100;
    return 0;
  }

  getShoppingCartTotalValue() {
    return this.getShoppingCartDeliveryValue() + this.getShoppingCartProductValue();
  }

  addToShoppingCart(commandeProduct: CommandeProduct, counter: number, oldComment: string, update: boolean) {
    let commandeProductMap: Map<string, Array<CommandeProduct>> = this.getShoppingCart();
    let commandeProductTab: Array<CommandeProduct> = commandeProductMap.get(commandeProduct.product.libelle) ?? new Array();
    if (update)
      commandeProductTab = commandeProductTab.filter(cmp => oldComment !== cmp.comment);
    for (let i = 0; i < counter; i++) {
      commandeProductTab.push(commandeProduct);
    }
    commandeProductMap.set(commandeProduct.product.libelle, commandeProductTab);
    localStorage.setItem('shoppingCard', JSON.stringify(Array.from(commandeProductMap)));
  }

  removeFromShoppingCart(commandeProduct: CommandeProduct) {
    let commandeProductMap: Map<string, Array<CommandeProduct>> = this.getShoppingCart();
    let commandeProductTab: Array<CommandeProduct> = commandeProductMap.get(commandeProduct.product.libelle) ?? new Array();
    commandeProductTab = commandeProductTab.filter(cmp => commandeProduct.comment !== cmp.comment);
    if (commandeProductTab.length !== 0)
      commandeProductMap.set(commandeProduct.product.libelle, commandeProductTab);
    else
      commandeProductMap.delete(commandeProduct.product.libelle);
    localStorage.setItem('shoppingCard', JSON.stringify(Array.from(commandeProductMap)));
  }

  private sortCommandeProductByKeyAndComment() {
    let commandeProductMap: Map<string, Array<CommandeProduct>> = this.getShoppingCart();
    let groupByCommentMap: Map<string, any> = new Map();
    commandeProductMap.forEach((commandeProductArray, key) =>
      groupByCommentMap.set(key, groupBy(commandeProductArray, "comment")));
    return Array.from(groupByCommentMap.values());
  }

  getCommandeProductByKeyAndCommentArrays() {
    let arr = new Array();
    this.sortCommandeProductByKeyAndComment().forEach(
      reducedCommandeProduct =>
        arr = arr.concat(Object.values(reducedCommandeProduct))
    )
    return arr;
  }

  getCommadeType() {
    return localStorage.getItem('commandeType');
  }

  setCommandeType(commandeType: string) {
    return localStorage.setItem('commandeType', commandeType);
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


