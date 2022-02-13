import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogMessageComponent } from './components/dialog-message/dialog-message.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { ExistPhoneNumberDirective } from './directives/exist-phone-number/exist-phone-number.directive';
import { ExistEmailDirective } from './directives/existEmail/exist-email.directive';



@NgModule({
  declarations: [
    DialogMessageComponent,
    ExistPhoneNumberDirective,
    ExistEmailDirective
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    TranslateModule.forChild()
  ],
  exports:[DialogMessageComponent,ExistPhoneNumberDirective, ExistEmailDirective]
})
export class SharedModule { }
