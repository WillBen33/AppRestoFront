/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { UserControllerService } from './services/user-controller.service';
import { RoleControllerService } from './services/role-controller.service';
import { ProfilControllerService } from './services/profil-controller.service';
import { ProductControllerService } from './services/product-controller.service';
import { JobOfferControllerService } from './services/job-offer-controller.service';
import { CommandeControllerService } from './services/commande-controller.service';
import { CategoryControllerService } from './services/category-controller.service';
import { AllergenControllerService } from './services/allergen-controller.service';
import { InvoiceControllerService } from './services/invoice-controller.service';
import { CandidatureControllerService } from './services/candidature-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    UserControllerService,
    RoleControllerService,
    ProfilControllerService,
    ProductControllerService,
    JobOfferControllerService,
    CommandeControllerService,
    CategoryControllerService,
    AllergenControllerService,
    InvoiceControllerService,
    CandidatureControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
