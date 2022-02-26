import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogMessageComponent } from './components/dialog-message/dialog-message.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { ExistPhoneNumberDirective } from './directives/exist-phone-number/exist-phone-number.directive';
import { ExistEmailDirective } from './directives/existEmail/exist-email.directive';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    DialogMessageComponent,
    ExistPhoneNumberDirective,
    ExistEmailDirective,
    ShoppingCartComponent
  ],
    imports: [
        CommonModule,
        NbCardModule,
        NbButtonModule,
        TranslateModule.forChild(),
        NgbDatepickerModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [DialogMessageComponent, ExistPhoneNumberDirective, ExistEmailDirective, ShoppingCartComponent]
})
export class SharedModule { }
