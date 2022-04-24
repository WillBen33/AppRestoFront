import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  nbProductInCart: number = 0;
  selectedItemFormControl: FormControl = new FormControl();
  constructor(private shoppingCartService: ShoppingCartService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.nbProductInCart = this.shoppingCartService.getNbProductInCart();
    this.selectedItemFormControl.setValue(this.shoppingCartService.getCommadeType());
    this.selectedItemFormControl.valueChanges.subscribe(value => this.shoppingCartService.setCommandeType(value))
  }

  getCommandeProductByKeyAndCommentArrays() {
    return this.shoppingCartService.getCommandeProductByKeyAndCommentArrays();
  }

  goMenu() {
    this.router.navigate(["/menu"])
  }




}
