import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import { AuthenticationControllerService } from 'src/app/api/services';
import { StrictHttpResponse } from 'src/app/api/strict-http-response';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

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
    ).subscribe((response) => {
      this.handleResponse(response);
    })
  }

  handleResponse(response: StrictHttpResponse<any>) {
    if (response.status === 0) {
      this.toastrService.warning(
        this.translateService.instant("error.emailValidation.clientSide"),
        this.translateService.instant("error.emailValidation.title"),
        {
          duration: 40000,
        }
      )
    } else {
      if (response.status === 401) {
        this.toastrService.danger(
          this.translateService.instant("error.emailValidation.message"),
          this.translateService.instant("error.emailValidation.title"),
          {
            duration: 40000,
          }
        )
      } else {
        this.toastrService.success(
          this.translateService.instant("account.isActivated.message"),
          this.translateService.instant("account.isActivated.title"),
          {
            duration: 20000,
            status: "success"
          });
        this.router.navigate(['auth/sign-in']);
      }
    }
  }

}
