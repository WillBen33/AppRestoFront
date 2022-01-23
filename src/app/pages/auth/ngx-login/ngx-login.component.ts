import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ngx-login',
  templateUrl: './ngx-login.component.html',
  styleUrls: ['./ngx-login.component.scss']
})
export class NgxLoginComponent extends NbLoginComponent implements OnInit {

  constructor(nbAuthService : NbAuthService,@Inject(NB_AUTH_OPTIONS) protected options = {}, cd:ChangeDetectorRef,router:Router, private translateService:TranslateService) {
    super(nbAuthService,options,cd, router);
  }

  ngOnInit(): void {
  }

  getTranslation(key:string)
  {
    return this.translateService.instant(key);
  }

}
