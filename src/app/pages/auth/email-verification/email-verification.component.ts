import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { AuthenticationControllerService } from 'src/app/api/services';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

  inputEmail: string = '';
  refresh: boolean = false;
  constructor(private authService: AuthenticationControllerService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private translateService: TranslateService,
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.activateRoute.queryParams.pipe(
      take(1),
      filter(params => params['token'] != null),
      switchMap(params => this.authService.verifyUserEmail$Response({ token: params['token'] })),
      catchError(err => this.handleError(err))
    ).subscribe(() => this.handleResponse())
  }

  handleResponse() {
    this.toastrService.success(
      this.translateService.instant("account.isActivated.message"),
      this.translateService.instant("account.isActivated.title"));
    if (this.shoppingCartService.getNbProductInCart() > 0) {
      this.router.navigate(['commande/confirmCommande']);
    }
    else {
      this.router.navigate(['auth/sign-in']);
    }
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      this.toastrService.warning(
        this.translateService.instant("error.clientSide"),
        this.translateService.instant("error.email.title"))
    } else {
      this.toastrService.error(
        this.translateService.instant("error.email.message"),
        this.translateService.instant("error.email.title"));
      this.refresh = true;
    }
    return throwError(
      'Something bad happened; please try again later.');
  }


  refreshVerificationEmail() {
    this.authService.refreshVerificationEmail({ email: this.inputEmail }).subscribe(() => {
      this.toastrService.success(
        this.translateService.instant("account.register.validate"),
        this.translateService.instant("account.register.verifyEmail"),
      );
    })
  }
}
