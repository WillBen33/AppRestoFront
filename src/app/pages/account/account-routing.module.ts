import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth/guards/authentication/auth-guard.service';
import { AccountComponent } from "./account.component";
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent
  },
  {
    path: 'profil',
    component: ProfilComponent,
    canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
