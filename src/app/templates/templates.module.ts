import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from "./navigation/navigation.component";
import { LayoutComponent } from './layout/layout.component';
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages/pages.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NbCardModule, NbLayoutModule} from "@nebular/theme";

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PagesModule,
    FontAwesomeModule,
    NbLayoutModule,
    NbCardModule
  ],
  exports: []
})
export class TemplatesModule {
}
