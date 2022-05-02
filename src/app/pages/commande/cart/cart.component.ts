import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CommandeProduct } from 'src/app/api/models';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  selectedItemFormControl: FormControl = new FormControl();
  groupedCommandeProducts$ : Observable<Array<Array<CommandeProduct>>> = new Observable();
  constructor(private shoppingCartService: ShoppingCartService,
    private router: Router,
    private nbAuthService: NbAuthService) {
      this.groupedCommandeProducts$ = this.shoppingCartService.commandeProductSubject.asObservable();
  }


  ngOnInit(): void {
    this.selectedItemFormControl.setValue(this.shoppingCartService.getCommadeType());
    this.selectedItemFormControl.valueChanges.subscribe(value => this.shoppingCartService.setCommandeType(value));
  }

  goMenu() {
    this.router.navigate(["/menu"])
  }

  getNbProduct() {
    return this.shoppingCartService.getNbProductInCart();
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
}
