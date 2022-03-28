import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Commande, CommandeProduct } from 'src/app/api/models';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-selection-dialog',
  templateUrl: './product-selection-dialog.component.html',
  styleUrls: ['./product-selection-dialog.component.scss']
})
export class ProductSelectionDialogComponent implements OnInit {

  counter: number = 1;
  product: any;
  totalPrice: number = 0;
  comment: string = "";
  oldComment: string = "";
  update: boolean = false;

  constructor(private nbDialogRef: NbDialogRef<ProductSelectionDialogComponent>,
    private shoppingCardService: ShoppingCartService) { }


  ngOnInit(): void {
    this.updateTotalPrice();
  }

  add() {
    this.counter++;
    this.updateTotalPrice();
  }

  remove() {
    if (this.counter > 1) {
      this.counter--;
      this.updateTotalPrice();
    }
  }

  addToShoppingCart(productSelectionForm: NgForm) {
    let currentCommandeProduct: CommandeProduct = {
      commande: {} as Commande,
      comment: productSelectionForm.value['comment'],
      product: this.product,
    }
    this.shoppingCardService.addToShoppingCart(currentCommandeProduct, this.counter, this.oldComment, this.update);
    this.nbDialogRef.close("submit");
  }

  updateTotalPrice() {
    this.totalPrice = this.counter * this.product.price;
  }



}
