import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';


import {ContactRoutingModule} from './contact-routing.module';
import {environment} from "../../../environments/environment";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
})
export class ContactModule {
}
