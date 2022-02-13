import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NbAuthService, NbRegisterComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { ProfilControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-ngx-register',
  templateUrl: './ngx-register.component.html',
  styleUrls: ['./ngx-register.component.scss']
})
export class NgxRegisterComponent extends NbRegisterComponent implements OnInit {

  showPassword: boolean = false;
  showRePassword: boolean = false;
  loading : boolean = false;

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

  constructor(nbAuthService: NbAuthService, @Inject(NB_AUTH_OPTIONS) protected options = {},
    cd: ChangeDetectorRef, router: Router,
    private profilService: ProfilControllerService  ) {
    super(nbAuthService, options, cd, router);
  }

  ngOnInit(): void {
    this.profilService.getProfilById({ id: 2 }).subscribe(profil =>
      this.user.profils[0] = profil);
  }

  setBillingAdress(checked: boolean) {
    if (checked) {
      this.user.billingAdress = this.user.deliveryAdress;
      this.checkedBillingAdress = true;
    } else {
      this.checkedBillingAdress = false;
      this.user.billingAdress = {
        city: '',
        street: '',
        streetNumber: '',
        zipCode: '',
        additionalAdress: '',
        country: '',
        department: ''
      }
    }
  }


customRegister()
{
  this.loading = true;
  this.register();
}

  toggleFieldTextType(field: NgModel) {
    if (field.name === 'password')
      this.showPassword = !this.showPassword;
    if (field.name === 'rePass')
      this.showRePassword = !this.showRePassword;
  }

}

