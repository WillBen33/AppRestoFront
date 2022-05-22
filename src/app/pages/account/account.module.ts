import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ProfilComponent } from './profil/profil.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbInputModule, NbButtonModule, NbCheckboxModule, NbIconModule, NbLayoutModule, NbCardModule, NbSpinnerModule, NbFormFieldModule, NbDialogModule, NbTooltipModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../Shared/shared.module';
import { FormsModule } from '@angular/forms';


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
