import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import { NbButtonModule, NbLayoutModule } from '@nebular/theme';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule {
}
