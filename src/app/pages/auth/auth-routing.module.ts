import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent, NbLoginComponent } from '@nebular/auth';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { NgxLoginComponent } from './ngx-login/ngx-login.component';
import { NgxRegisterComponent } from './ngx-register/ngx-register.component';
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
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
