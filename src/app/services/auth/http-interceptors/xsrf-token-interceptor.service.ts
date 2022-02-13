import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XsrfTokenInterceptorService  implements HttpInterceptor{

  constructor(public cookieService: CookieService) { }
  private xsrfTokenMethods:Array<string> = ["POST","DELETE","PUT"];

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.xsrfTokenMethods.includes(req.method))
    {
      req = this.addXsrfToken(req);
    }
    return next.handle(this.setCredentials(req));
  }

  setCredentials(req:HttpRequest<any>)
  {
    return req.clone({
      withCredentials:true
    })
  }

  getXsrfToken():string
  {
    return this.cookieService.get('XSRF-TOKEN');
  }

  addXsrfToken(req:HttpRequest<any>)
  {
    return req.clone({
      headers: req.headers.set("X-XSRF-TOKEN",this.getXsrfToken())
    })
  }
}
