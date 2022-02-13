import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule, HttpRequest } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TemplatesModule } from "./templates/templates.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbDialogModule, NbLayoutModule, NbThemeModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy, NB_AUTH_TOKEN_INTERCEPTOR_FILTER } from '@nebular/auth';
import { CookieService } from 'ngx-cookie-service';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { httpInterceptorProviders } from './services/auth/http-interceptors';

export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

export interface NbAuthSocialLink {
  link?: string,
  url?: string,
  target?: string,
  title?: string,
  icon?: string,
}
const socialLinks: NbAuthSocialLink[] = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TemplatesModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    NgbModule,
    NbLayoutModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://localhost:8081/restaurant',
          token: {
            class: NbAuthJWTToken,
            key: 'accessToken',
          },
          refreshToken:
          {
            endpoint: '/auth/refresh',
            method: 'post',
            requireValidToken: true,
          },
          login: {
            endpoint: '/auth/sign-in',
            method: 'post',
            redirect: {
              success: '/home',
              failure: null
            },
          },
          register: {
            endpoint: '/auth/sign-up',
            method: 'post',
            requireValidToken: false,
            redirect: {
              success: '/auth/register-success',
              failure: null
            },
          },
          logout: {
            endpoint: '/auth/logout',
            method: 'get',
            redirect:{
              success:'/menu'
            }
          },
          requestPass: {
            endpoint: '/auth/request-password',
            method: 'post',
          },
          resetPass: {
            endpoint: '/auth/reset-password',
            method: 'post',
          }
        }),
      ],
      forms: {
        login: {
          redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'email',  // strategy id key.
          rememberMe: false,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: true,
            error: true,
          },
          socialLinks: socialLinks, // social links at the bottom of a page
        },
        register: {
          redirectDelay: 500,
          strategy: 'email',
          showMessages: {
            success: true,
            error: true,
          },
          terms: true,
          socialLinks: socialLinks,
        },
        requestPassword: {
          redirectDelay: 500,
          strategy: 'email',
          showMessages: {
            success: true,
            error: true,
          },
          socialLinks: socialLinks,
        },
        resetPassword: {
          redirectDelay: 500,
          strategy: 'email',
          showMessages: {
            success: true,
            error: true,
          },
          socialLinks: socialLinks,
        },
        logout: {
          redirectDelay: 500,
          strategy: 'email',
        },
        validation: {
          password: {
            required: true,
            minLength: 8,
            maxLength: 32,
          },
          email: {
            required: true,
          },
          fullName: {
            required: false,
            minLength: 3,
            maxLength: 50,
          }
        }
      }
    })
  ],
  providers: [
    {
      provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
      useValue: function (req: HttpRequest<any>) {
        if (req.url === 'http://localhost:8081/restaurant/auth/refresh') {
          return true;
        }
        return false;
      },
    },
    httpInterceptorProviders,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(faLibrary: FaIconLibrary) {
    faLibrary.addIconPacks(far, fas, fab);
  }
}

export interface NbAuthSocialLink {
  link?: string,
  url?: string,
  target?: string,
  title?: string,
  icon?: string,
}

