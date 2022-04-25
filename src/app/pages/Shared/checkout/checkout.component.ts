import { Component, OnInit } from '@angular/core';
import { CheckoutControllerService } from "../../../api/services/checkout-controller.service";
import { filter, switchMap, tap } from "rxjs/operators";
import { Order } from "../../../api/models/order";
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { Adress, CommandeProduct, User } from 'src/app/api/models';
import { UserControllerService } from 'src/app/api/services';
import { NbAuthService } from '@nebular/auth';
import KRGlue from '@lyracom/embedded-form-glue';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public payzenObjectResponse: any = {};
  public formToken: string = '';
  public title: string = 'Checkout Form';

  order: Order = {
    payzenOrderInfos: {
      "amount": 50000,
      "currency": "EUR",
    },
    commande:
    {
      billingAdress: {} as Adress,
      deliveryAdress: {} as Adress,
      firstname: "",
      phoneNumber: "",
      commandeProducts: {} as Array<CommandeProduct>,
      createdAt: "",
      email: "",
      typeCommande: "DELIVERY",
      number: "",
    }
  }

  constructor(private checkoutControllerService: CheckoutControllerService,
    private shoppingCartService: ShoppingCartService,
    private userService: UserControllerService,
    private authService: NbAuthService) {
    this.initOrder();
  }

  ngOnInit() {

  }

  public onCheckout() {
    const endpoint = "https://static.payzen.eu/static/js/krypton-client/V4.0/stable/kr-payment-form.min.js";
    const publicKey = "67953007:testpublickey_5U33XRhlq7USngQP0hmpn6Kw1jVL29VucW1xOTicQZdsT";
    const formToken = this.formToken;

    KRGlue.loadLibrary(endpoint, publicKey) /* Load the remote library */
      .then(({ KR }) =>
        KR.setFormConfig({
          /* set the minimal configuration */
          formToken: formToken,
          "kr-language": "fr-FR", /* to update initialization parameter */
        })
      )
      .then(({ KR }) =>
        KR.addForm("#myPaymentForm")
      ) /* add a payment form  to myPaymentForm div*/
      .then(({ KR, result }) =>
        KR.showForm(result.formId)
      ); /* show the payment form */
  }

  initOrder() {
    this.order.commande.commandeProducts = this.shoppingCartService.getShoppingCartAsArray();
    this.order.commande.typeCommande = this.shoppingCartService.getCommadeType();
    this.order.payzenOrderInfos.amount = this.shoppingCartService.getShoppingCartTotalValue() * 100;
    this.authService.isAuthenticated().pipe(
      filter(res => res === true),
      switchMap(() => this.userService.getCurrentUser()),
      switchMap(user => {
        this.order.commande.billingAdress = user.billingAdress,
          this.order.commande.deliveryAdress = user.deliveryAdress,
          this.order.commande.email = user.email,
          this.order.commande.phoneNumber = user.phoneNumber,
          this.order.commande.firstname = user.firstname
        return this.checkoutControllerService.generateFormToken({ body: this.order })
      }),
      tap(data => this.formToken = data?.answer.formToken)).
      subscribe(() => this.onCheckout());
  }
}
