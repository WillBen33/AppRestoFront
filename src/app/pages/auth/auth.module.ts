import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbSelectModule, NbSpinnerModule, NbWindowModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { IgxDividerModule } from 'igniteui-angular';
import { SharedModule } from '../Shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { LoginCheckoutComponent } from './login-checkout/login-checkout.component';
import { NgxLoginComponent } from './ngx-login/ngx-login.component';
import { NgxRegisterComponent } from './ngx-register/ngx-register.component';
import { NgxRequestPasswordComponent } from './ngx-request-password/ngx-request-password.component';
import { NgxResetPasswordComponent } from './ngx-reset-password/ngx-reset-password.component';
import { SuccessRegisterComponent } from './success-register/success-register.component';

const windoWonfig: any =
{
  buttons: {
    fullScreen: false,
    maximize: false,
    minimize: false
  },
  closeOnEsc: true,
  hasBackdrop: true
}

@NgModule({
  declarations: [
    NgxLoginComponent,
    NgxRegisterComponent,
    SuccessRegisterComponent,
    EmailVerificationComponent,
    NgxRequestPasswordComponent,
    NgxResetPasswordComponent,
    LoginCheckoutComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule,
    NbIconModule,
    NbLayoutModule,
    NbSelectModule,
    FontAwesomeModule,
    IgxDividerModule,
    NbCardModule,
    NbSpinnerModule,
    NbFormFieldModule,
    NbDialogModule.forChild(),
    SharedModule,
    NbWindowModule.forChild(windoWonfig)
  ]
})
export class AuthModule { }
