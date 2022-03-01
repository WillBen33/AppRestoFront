import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ProfilComponent } from './profil/profil.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbInputModule, NbButtonModule, NbCheckboxModule, NbIconModule, NbLayoutModule, NbSelectModule, NbCardModule, NbSpinnerModule, NbFormFieldModule, NbDialogModule, NbTooltipModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { IgxDividerModule } from 'igniteui-angular';
import { SharedModule } from '../Shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    ProfilComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    TranslateModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbLayoutModule,
    FontAwesomeModule,
    IgxDividerModule,
    NbCardModule,
    NbSpinnerModule,
    NbFormFieldModule,
    NbCheckboxModule,
    NbDialogModule.forChild(),
    SharedModule,
    NbTooltipModule
  ]
})
export class AccountModule { }
