import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {TranslateModule} from "@ngx-translate/core";
import {CarouselComponent} from "./Shared/carousel/carousel.component";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [AboutComponent, ContactComponent, HomeComponent, CarouselComponent],
  imports: [
    CommonModule, TranslateModule, MatCarouselModule, BrowserAnimationsModule, MatIconModule,
  ]
})
export class PagesModule {
}
