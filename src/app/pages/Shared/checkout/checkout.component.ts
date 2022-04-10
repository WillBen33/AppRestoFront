import {Component, OnInit} from '@angular/core';
import {CheckoutControllerService} from "../../../api/services/checkout-controller.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public formToken: {} = "";

  constructor(private checkoutControllerService: CheckoutControllerService) {}

  ngOnInit() {}

  public onCheckout() {
    this.checkoutControllerService.generateFormToken().subscribe(data => {
      this.formToken = data;
      console.log(this.formToken);
    });
  }

}
