import {Component, OnInit} from '@angular/core';
import KRGlue from '@lyracom/embedded-form-glue';
import {TranslateService} from '@ngx-translate/core';
import axios from 'axios';
import {ToastrService} from 'ngx-toastr';
import {tap} from 'rxjs/operators';
import {Adress, CommandeProduct, Order} from 'src/app/api/models';
import {CheckoutControllerService} from 'src/app/api/services';
import {ShoppingCartService} from 'src/app/services/shopping-cart/shopping-cart.service';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-heat-the-payment-card',
  templateUrl: './heat-the-payment-card.component.html',
  styleUrls: ['./heat-the-payment-card.component.scss']
})
export class HeatThePaymentCardComponent implements OnInit {

  formToken: string = '';
  title: string = 'Checkout Form';
  message: string = "";

  order: Order = {
    payzenOrderInfos: {
      amount: 50000,
      currency: "EUR",
      ipnTargetUrl:`${environment.backendUrl}${environment.ipnTargetUrl}`
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

  constructor(private checkoutControllerService: CheckoutControllerService,
              private shoppingCartService: ShoppingCartService,
              private toastrService: ToastrService,
              private translateService: TranslateService) {
    this.order.commande = this.initCommande();
  }

  ngOnInit() {
    this.initOrder();
  }

  initOrder() {
    this.order.commande.commandeProducts = this.shoppingCartService.getShoppingCartAsArray();
    this.order.commande.typeCommande = this.shoppingCartService.getCommadeType();
    this.order.payzenOrderInfos.amount = this.shoppingCartService.getShoppingCartTotalValue() * 100;
    this.checkoutControllerService.generateFormToken({body: this.order}).pipe(
      tap(data => this.formToken = data?.answer.formToken)).subscribe(() => this.onCheckout());
  }

  public onCheckout() {
    const endpoint = environment.payzenUrl;
    const publicKey = environment.payzenPublicKey;
    const formToken = this.formToken;
    KRGlue.loadLibrary(endpoint, publicKey) /* Load the remote library */
      .then(({KR}) =>
        KR.setFormConfig({
          /* set the minimal configuration */
          formToken: formToken,
          "kr-language": "fr-FR", /* to update initialization parameter */
          "kr-clear-on-error": false, /* clear the CCV field on refused transaction */
        })
      )
      .then(({KR}) => {
        return KR.onSubmit(resp => {
          axios
            .post( environment.backendUrl+environment.checkoutUri, resp)
            .then(response => {
              if (response.status === 200) {
                this.toastrService.success(this.translateService.instant("payment.valid"), this.translateService.instant("payment.title"));
                 this.shoppingCartService.deleteAllCartProducts();
                KR.hideForm("#myPaymentForm").then(r => KR.hideForm("#myPaymentForm"));
                location.href = 'commande/success';
              }
            });
          return false
        });
      })
      .then(({KR}) => KR.onError(resp => {
        if (resp.errorCode === "CLIENT_100")
        {
          this.toastrService.error(this.translateService.instant("payment.formTokenExpired"), this.translateService.instant("payment.title"), { timeOut:100000, easeTime:1});
        }else{
        this.toastrService.error(this.translateService.instant("payment.invalid"), this.translateService.instant("payment.title"), { timeOut:100000, easeTime:1});
        }
      })
      .then(({KR}) =>
        KR.addForm("#myPaymentForm")
      ) /* add a payment form  to myPaymentForm div*/
      .then(({KR, result}) =>
        KR.showForm(result.formId)
      ) /* show the payment form */
    );
  }



  initCommande() {
    let commande = localStorage.getItem('readyTopay');
    if (commande)
      return JSON.parse(commande);
    return null;
  }
}