import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbRegisterComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { ProfilControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-ngx-register',
  templateUrl: './ngx-register.component.html',
  styleUrls: ['./ngx-register.component.scss']
})
export class NgxRegisterComponent extends NbRegisterComponent implements OnInit {
  
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
  checkedBillingAdress:boolean = false;

  constructor(nbAuthService: NbAuthService, @Inject(NB_AUTH_OPTIONS) protected options = {},
    cd: ChangeDetectorRef, router: Router,
    private translateService: TranslateService,
    private profilService: ProfilControllerService
  ) {
    super(nbAuthService, options, cd, router);
  }

  ngOnInit(): void {
  }

  getTranslation(key: string) {
    return this.translateService.instant(key);
  }

  customRegister() {
    this.profilService.getProfilById({ id: 2 }).pipe(take(1)).subscribe(profil => {
      this.user.profils[0] = profil;
      this.register();
    })

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

  updateTerms()
  {
    
  }

}
