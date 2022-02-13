/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NbAuthJWTInterceptor } from '@nebular/auth';
import { XsrfTokenInterceptorService } from './xsrf-token-interceptor.service';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: NbAuthJWTInterceptor,
        multi : true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass : XsrfTokenInterceptorService,
        multi: true
    }

];