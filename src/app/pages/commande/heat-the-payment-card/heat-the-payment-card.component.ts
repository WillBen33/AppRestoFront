import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import KRGlue from '@lyracom/embedded-form-glue';
import { TranslateService } from '@ngx-translate/core';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { Adress, CommandeProduct, Order } from 'src/app/api/models';
import { CheckoutControllerService } from 'src/app/api/services';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-heat-the-payment-card',
  templateUrl: './heat-the-payment-card.component.html',
  styleUrls: ['./heat-the-payment-card.component.scss']
})
export class HeatThePaymentCardComponent implements OnInit {

  payzenObjectResponse: any = {};
  formToken: string = '';
  title: string = 'Checkout Form';

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
      createdAt: JSON.stringify(new Date()),
      email: "",
      typeCommande: "DELIVERY",
      number: "",
    }
  }
  message: string = "";

  constructor(private checkoutControllerService: CheckoutControllerService,
    private shoppingCartService: ShoppingCartService,
    private cookieService: CookieService,
    private toastrService: ToastrService,
    private translateService : TranslateService,
    private router : Router) {
    this.order.commande = this.initCommande();
  }


  ngOnInit() {
    this.initOrder();
  }

  public onCheckout() {
    const endpoint = "https://static.payzen.eu/";
    const publicKey = "67953007:testpublickey_5U33XRhlq7USngQP0hmpn6Kw1jVL29VucW1xOTicQZdsT";
    const formToken = this.formToken;
    KRGlue.loadLibrary(endpoint, publicKey) /* Load the remote library */
    .then(({ KR }) =>
      KR.setFormConfig({
        /* set the minimal configuration */
        formToken: formToken,
        "kr-language": "fr-FR", /* to update initialization parameter */
        "kr-clear-on-error": false, /* clear the CCV field on refused transaction */
      })
    ).then(({KR}) => KR.onSubmit(resp => {
      axios
        .post('http://localhost:8081/restaurant/checkout/validatePayment', resp,
        {
          headers:{
            'X-XSRF-TOKEN' : this.cookieService.get("XSRF-TOKEN")
          },
          withCredentials:true,
        })
        .then(response => {
          if (response.status === 200)
          {
            this.toastrService.success(this.translateService.instant("payment.valid"), this.translateService.instant("payment.title"));
            // this.shoppingCartService.deleteAllCartProducts();
            // this.router.navigate(['commande/success']);
          }
        }
      )
      return false
    }))
    .then(({KR}) => KR.onError(resp => {
      this.toastrService.error(this.translateService.instant("payment.invalid"), this.translateService.instant("payment.title"));
    }))
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
    this.checkoutControllerService.generateFormToken({ body: this.order }).pipe(
      tap(data => this.formToken = data?.answer.formToken)).
      subscribe(() => this.onCheckout());
  }

  initCommande() {
    let commande = localStorage.getItem('readyTopay');
    if (commande)
      return JSON.parse(commande);
    return null;
  }
}
