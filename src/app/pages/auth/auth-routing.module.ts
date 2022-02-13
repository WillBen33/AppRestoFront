import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { NgxLoginComponent } from './ngx-login/ngx-login.component';
import { NgxRegisterComponent } from './ngx-register/ngx-register.component';
import { NgxRequestPasswordComponent } from './ngx-request-password/ngx-request-password.component';
import { NgxResetPasswordComponent } from './ngx-reset-password/ngx-reset-password.component';
import { SuccessRegisterComponent } from './success-register/success-register.component';

const routes: Routes = [
  {
    path:'',
    component: NbAuthComponent,
    children:
    [
      {
        path:'sign-in',
        component: NgxLoginComponent
      },
      {
        path:'register',
        component:NgxRegisterComponent
      },
      {
        path:'verifyEmail',
        component:EmailVerificationComponent
      },
      {
        path:'register-success',
        component:SuccessRegisterComponent
      },
      {
        path:'request-password',
        component: NgxRequestPasswordComponent
      },
      {
        path:'reset-password',
        component: NgxResetPasswordComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
