import { ChangeDetectorRef, Component, Inject, OnInit, Optional } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NbAuthService, NbRegisterComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { NbWindowRef } from '@nebular/theme';
import { ProfilControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-ngx-register',
  templateUrl: './ngx-register.component.html',
  styleUrls: ['./ngx-register.component.scss']
})
export class NgxRegisterComponent extends NbRegisterComponent implements OnInit {

  showPassword: boolean = false;
  showRePassword: boolean = false;
  loading: boolean = false;

  user: any = {
    billingAdress: {
      city: '',
      street: '',
      streetNumber: '',
      zipCode: '',
      additionalAdress: '',
      country: '',
      department: ''
    },
    deliveryAdress: {
      city: '',
      street: '',
      streetNumber: '',
      zipCode: '',
      additionalAdress: '',
      country: '',
      department: ''
    },
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    phoneNumber: '',
    userSecret: 'ok',
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true,
    enabled: false,
    civility: "MADAME",
    terms: false,
    profils: new Array()
  };
  checkedBillingAdress: boolean = false;

  constructor(private nbAuthService: NbAuthService, @Inject(NB_AUTH_OPTIONS) protected options = {},
    cd: ChangeDetectorRef, router: Router,
    private profilService: ProfilControllerService,
    @Optional() private windowRef: NbWindowRef) {
    super(nbAuthService, options, cd, router);
  }

  ngOnInit(): void {
    this.profilService.getProfilByName({profilName: 'customer'}).subscribe(profil =>
      this.user.profils[0] = profil);
  }

  isDeliveryAdressValid(form:NgForm)
    {
      return form.controls['deliveryAdressStreet'].valid && form.controls['deliveryAdressStreetNumber'].valid 
      && form.controls['deliveryAdressCity'].valid && form.controls['deliveryAdressZipCode'].valid;
    }
  
  setBillingAdress(checked :any, form: NgForm) {
    if (checked) {
      this.user.billingAdress = this.user.deliveryAdress;
      this.checkedBillingAdress = checked;
    }
  }


  customRegister() {
    if (this.windowRef) {
      this.loading = true;
      this.nbAuthService.register("email", this.user).subscribe(nbAuthResult => {
        if (nbAuthResult.isSuccess()) {
          this.windowRef?.close();
        }
        else
          this.errors = nbAuthResult.getErrors();
      })
    }
    else {
      this.loading = true;
      this.register();
    }
  }

  toggleFieldTextType(field: NgModel) {
    if (field.name === 'password')
      this.showPassword = !this.showPassword;
    if (field.name === 'rePass')
      this.showRePassword = !this.showRePassword;
  }

}

