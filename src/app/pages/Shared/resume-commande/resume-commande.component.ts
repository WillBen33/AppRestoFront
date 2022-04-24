import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { take } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-resume-commande',
  templateUrl: './resume-commande.component.html',
  styleUrls: ['./resume-commande.component.scss']
})
export class ResumeCommandeComponent implements OnInit {

  @Input()
  translateExpression: string = '';

  constructor(private shoppingCartService: ShoppingCartService,
    private router: Router,
    private nbAuthService: NbAuthService) {

  }

  ngOnInit(): void {
  }

  getShoppingCartDeliveryValue() {
    return this.shoppingCartService.getShoppingCartDeliveryValue().toFixed(2);
  }
  getShoppingCartProductValue() {
    return this.shoppingCartService.getShoppingCartProductValue().toFixed(2);
  }

  getShoppingCartTotalValue() {
    return this.shoppingCartService.getShoppingCartTotalValue().toFixed(2);
  }

  completeCommande() {
    this.nbAuthService.isAuthenticated().pipe(take(1)).subscribe(
      res => {
        if (res) {
          this.router.navigate(["/commande/confirmCommande"]);
        } else {
          this.router.navigate(["/auth/checkout"]);
        }
      }
    )
  }

  isDeliveryCommande() {

    return this.shoppingCartService.getCommadeType() === "DELIVERY";
  }

}
