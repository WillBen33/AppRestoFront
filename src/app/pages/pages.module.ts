import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {TranslateModule} from "@ngx-translate/core";
import {CarouselComponent} from "./Shared/components/carousel/carousel.component";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import {MatIconModule} from "@angular/material/icon";
import {MenuComponent} from './menu/menu.component';
import {DealsComponent} from './deals/deals.component';
import {ApproachComponent} from './approach/approach.component';
import {RouterModule} from "@angular/router";
import {JoinComponent} from './join/join.component';
import {AccountComponent} from './account/account.component';
import {NgbDatepickerModule, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {NbAccordionModule, NbButtonModule, NbCardModule, NbLayoutModule} from '@nebular/theme';
import {NotFoundComponent} from './not-found/not-found.component';
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "./Shared/shared.module";

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CarouselComponent,
    MenuComponent,
    DealsComponent,
    ApproachComponent,
    JoinComponent,
    AccountComponent,
    NotFoundComponent,],
  imports: [
    CommonModule, TranslateModule, MatCarouselModule, BrowserAnimationsModule, MatIconModule, RouterModule, NgbNavModule,
    NbCardModule,
    NbButtonModule,
    NbLayoutModule, MatButtonModule, NgbDatepickerModule, NbAccordionModule, SharedModule
  ]
})
export class PagesModule {
}
