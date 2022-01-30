import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbAuthService, NbResetPasswordComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { NbToastrService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { throwError } from 'rxjs';
import { take, switchMap, catchError, filter } from 'rxjs/operators';
import { User } from 'src/app/api/models';
import { AuthenticationControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-ngx-reset-password',
  templateUrl: './ngx-reset-password.component.html',
  styleUrls: ['./ngx-reset-password.component.scss']
})
export class NgxResetPasswordComponent extends NbResetPasswordComponent implements OnInit {

  reset: Boolean = false;


  constructor(nbAuthService: NbAuthService, @Inject(NB_AUTH_OPTIONS) protected options = {},
    cd: ChangeDetectorRef, router: Router,
    private translateService: TranslateService,
    private activateRoute: ActivatedRoute,
    private toastrService: NbToastrService,
    private authService: AuthenticationControllerService) {
    super(nbAuthService, options, cd, router);
  }

  ngOnInit(): void {
    this.activateRoute.queryParams.pipe(
      take(1),
      filter(params => params['token'] != null),
      switchMap(params => {
        this.reset = true;
        return this.authService.verifyResetPasswordToken({ token: params['token'] })
      }),
      catchError(err => this.handleError(err))
    ).subscribe(currentuser => this.user.email = currentuser.email);
  }

  handleResponse() {
    this.toastrService.success(
      this.translateService.instant("account.isActivated.message"),
      this.translateService.instant("account.isActivated.title"),
      {
        duration: 20000,
        status: "success"
      });
    this.router.navigate(['auth/sign-in']);
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      this.toastrService.warning(
        this.translateService.instant("error.reset-password.clientSide"),
        this.translateService.instant("error.reset-password.title"),
        {
          duration: 40000,
        }
      )
    } else {
      this.toastrService.danger(
        this.translateService.instant("error.reset-password.message"),
        this.translateService.instant("error.reset-password.title"),
        {
          duration: 40000,
        }
      )
      this.router.navigate(['auth/request-password'])
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
