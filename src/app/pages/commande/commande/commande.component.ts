import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbAuthService } from '@nebular/auth';
import { filter, switchMap } from 'rxjs/operators';
import { User } from 'src/app/api/models';
import { UserControllerService } from 'src/app/api/services';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {

  flippedIdentityInfos: boolean = false;
  flippedAddress: boolean = false;
  checkedBillingAdress: boolean = false;
  commandeInfosForm: FormGroup = new FormGroup({});
  authenticatedUser: boolean = false;


  constructor(private formBuilder: FormBuilder,
    private authService: NbAuthService,
    private userService: UserControllerService,
    private shoppingCartService: ShoppingCartService) {
    this.initForm();
  }

  ngOnInit(): void {
    this.authService.isAuthenticated().pipe(
      filter(res => res === true),
      switchMap(() => this.userService.getCurrentUser()))
      .subscribe(user => {
        this.authenticatedUser = true;
        this.flippIdentityInfosCard();
        this.flippAdressCard();
        this.setcommandeInfosFormValue(user);
      })

  }

  initForm() {
    this.commandeInfosForm = this.formBuilder.group(
      {
        identityInfos: this.formBuilder.group(
          {
            civility: ['', Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            email: ['', Validators.required],
            phoneNumber: ['', Validators.required]
          }
        ),
        billingAdress: this.formBuilder.group(
          {
            city: '',
            street: '',
            streetNumber: '',
            zipCode: '',
            additionalAdress: '',
          }
        ),
        deliveryAdress: this.formBuilder.group(
          {
            city: '',
            street: '',
            streetNumber: '',
            zipCode: '',
            additionalAdress: '',
          }
        )
      }
    )
  }

  setcommandeInfosFormValue(user: User) {
    this.commandeInfosForm.patchValue({

      identityInfos:
      {
        civility: user.civility,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phoneNumber: user.phoneNumber
      }
      ,
      billingAdress:
      {
        city: user.billingAdress.city,
        street: user.billingAdress.street,
        streetNumber: user.billingAdress.streetNumber,
        zipCode: user.billingAdress.zipCode,
        additionalAdress: user.billingAdress.additionalAdress,
      },
      deliveryAdress:
      {
        city: user.deliveryAdress.city,
        street: user.deliveryAdress.street,
        streetNumber: user.deliveryAdress.streetNumber,
        zipCode: user.deliveryAdress.zipCode,
        additionalAdress: user.deliveryAdress.additionalAdress,
      }
    })
    this.commandeInfosForm.get('identityInfos')?.disable();
  }

  flippIdentityInfosCard() {
    if (this.commandeInfosForm.get('identityInfos')?.valid)
      this.flippedIdentityInfos = !this.flippedIdentityInfos;
    else
      this.commandeInfosForm.get('identityInfos')?.markAllAsTouched();

  }

  flippAdressCard() {
    if (this.commandeInfosForm.get('billingAdress')?.valid && this.commandeInfosForm.get('deliveryAdress')?.valid)
      this.flippedAddress = !this.flippedAddress;
    else {
      if (this.commandeInfosForm.get('billingAdress')?.invalid)
        this.commandeInfosForm.get('billingAdress')?.markAllAsTouched();
      if (this.commandeInfosForm.get('deliveryAdress')?.invalid)
        this.commandeInfosForm.get('deliveryAdress')?.markAllAsTouched();
    }

  }

  get civility() {
    return this.commandeInfosForm.get('identityInfos.civility');
  }

  get firstname() {
    return this.commandeInfosForm.get('identityInfos.firstname');
  }

  get lastname() {
    return this.commandeInfosForm.get('identityInfos.lastname');
  }

  get email() {
    return this.commandeInfosForm.get('identityInfos.email');
  }

  get phoneNumber() {
    return this.commandeInfosForm.get('identityInfos.phoneNumber');
  }

  get billingAdressCity() {
    return this.commandeInfosForm.get('billingAdress.city');
  }

  get billingAdressStreet() {
    return this.commandeInfosForm.get('billingAdress.street')
  }

  get billingAdressStreetNumber() {
    return this.commandeInfosForm.get('billingAdress.streetNumber');
  }

  get billingAdressZipCode() {
    return this.commandeInfosForm.get('billingAdress.zipCode');
  }

  get billingAdressAdditionalAdress() {
    return this.commandeInfosForm.get('billingAdress.additionalAdress');
  }

  get deliveryAdressCity() {
    return this.commandeInfosForm.get('deliveryAdress.city');
  }

  get deliveryAdressStreet() {
    return this.commandeInfosForm.get('deliveryAdress.street')
  }

  get deliveryAdressStreetNumber() {
    return this.commandeInfosForm.get('deliveryAdress.streetNumber');
  }

  get deliveryAdressZipCode() {
    return this.commandeInfosForm.get('deliveryAdress.zipCode');
  }

  get deliveryAdressAdditionalAdress() {
    return this.commandeInfosForm.get('additionalAdress.additionalAdress');
  }


  setBillingAdress(checked: any) {
    if (checked) {
      this.checkedBillingAdress = true;
      this.commandeInfosForm.patchValue(
        {
          billingAdress:
          {
            city: this.getDeliveryAdressControlValue('city'),
            street: this.getDeliveryAdressControlValue('street'),
            streetNumber: this.getDeliveryAdressControlValue('streetNumber'),
            zipCode: this.getDeliveryAdressControlValue('zipCode'),
            additionalAdress: this.getDeliveryAdressControlValue('additionalAdress'),
          }
        }
      );

    } else {
      this.checkedBillingAdress = false;
    }
  }

  getIdentityInfosFormControl(formControlName: String) {
    this.commandeInfosForm.get(`identityInfos.${formControlName}`);
  }

  getIdentityInfosControlValue(formControlName: String) {
    return this.commandeInfosForm.get(`identityInfos.${formControlName}`)?.value;
  }

  getDeliveryAdressControlValue(formControlName: String) {
    return this.commandeInfosForm.get(`deliveryAdress.${formControlName}`)?.value;
  }
  isDeliveryCommande() {
    return this.shoppingCartService.getCommadeType() === "DELIVERY";
  }

}
