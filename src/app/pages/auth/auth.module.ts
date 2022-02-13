import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbInputModule, NbButtonModule, NbCheckboxModule, NbIconModule, NbLayoutModule, NbSelectModule, NbCardModule, NbSpinnerModule, NbFormFieldModule, NbDialogModule } from '@nebular/theme';
import { NgxLoginComponent } from './ngx-login/ngx-login.component';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxRegisterComponent } from './ngx-register/ngx-register.component';
import { IgxDividerModule } from 'igniteui-angular';
import { SuccessRegisterComponent } from './success-register/success-register.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { NgxRequestPasswordComponent } from './ngx-request-password/ngx-request-password.component';
import { NgxResetPasswordComponent } from './ngx-reset-password/ngx-reset-password.component';
import { SharedModule } from '../Shared/shared.module';


@NgModule({
  declarations: [
    NgxLoginComponent,
    NgxRegisterComponent,
    SuccessRegisterComponent,
    EmailVerificationComponent,
    NgxRequestPasswordComponent,
    NgxResetPasswordComponent,
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
    SharedModule
  ]
})
export class AuthModule { }
