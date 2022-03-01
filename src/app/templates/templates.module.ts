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
    FontAwesomeModule
  ],
  exports: []
})
export class TemplatesModule {
}
