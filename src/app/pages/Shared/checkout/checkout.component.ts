import {Component, OnInit} from '@angular/core';
import {CheckoutControllerService} from "../../../api/services/checkout-controller.service";
import KRGlue from "@lyracom/embedded-form-glue";
import {tap} from "rxjs/operators";
import {Order} from "../../../api/models/order";


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
    "amount": 50000,
    "currency": "EUR"
  }

  constructor(private checkoutControllerService: CheckoutControllerService) {
  }

  ngOnInit() {
    this.checkoutControllerService.generateFormToken({body: this.order}).pipe(tap(data => this.formToken = data?.answer.formToken)).subscribe(
      () => this.onCheckout()
    );
  }

  public onCheckout() {
    const endpoint = "https://static.payzen.eu/static/js/krypton-client/V4.0/stable/kr-payment-form.min.js";
    const publicKey = "67953007:testpublickey_5U33XRhlq7USngQP0hmpn6Kw1jVL29VucW1xOTicQZdsT";
    const formToken = this.formToken;

    KRGlue.loadLibrary(endpoint, publicKey) /* Load the remote library */
      .then(({KR}) =>
        KR.setFormConfig({
          /* set the minimal configuration */
          formToken: formToken,
          "kr-language": "fr-FR", /* to update initialization parameter */
        })
      )
      .then(({KR}) =>
        KR.addForm("#myPaymentForm")
      ) /* add a payment form  to myPaymentForm div*/
      .then(({KR, result}) =>
        KR.showForm(result.formId)
      ); /* show the payment form */
  }
}
