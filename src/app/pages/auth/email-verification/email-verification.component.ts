import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { AuthenticationControllerService } from 'src/app/api/services';

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
    private toastrService: NbToastrService,
    private translateService: TranslateService) { }

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
        this.translateService.instant("error.clientSide"),
        this.translateService.instant("error.email.title"),
        {
          duration: 40000,
        }
      )
    } else {
      this.toastrService.danger(
        this.translateService.instant("error.email.message"),
        this.translateService.instant("error.email.title"),
        {
          duration: 40000,
        }
      )
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
        {
          duration: 40000,
        }
      );
    })
  }
}
