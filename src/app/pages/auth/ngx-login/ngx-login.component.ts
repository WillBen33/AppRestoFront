import { ChangeDetectorRef, Component, Inject, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { NbWindowRef } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ngx-login',
  templateUrl: './ngx-login.component.html',
  styleUrls: ['./ngx-login.component.scss']
})
export class NgxLoginComponent extends NbLoginComponent implements OnInit {


  constructor(private nbAuthService: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    cd: ChangeDetectorRef,
    router: Router,
    private translateService: TranslateService,
    @Optional() private windowRef: NbWindowRef,
  ) {
    super(nbAuthService, options, cd, router);
  }

  ngOnInit(): void {

  }


  customLogin(): void {
    if (this.windowRef) {
      this.nbAuthService.authenticate("email", this.user).subscribe(nbAuthResult => {
        if (nbAuthResult.isSuccess()) {
          this.windowRef?.close("submit")
        }
        else
          this.errors = nbAuthResult.getErrors();
      })
    } else {
      this.login();
    }

  }

  getTranslation(key: string) {
    return this.translateService.instant(key);
  }

  register() {
    if (this.windowRef) {
      this.windowRef.close();
    }
    this.router.navigate(['/auth/register']);
  }

}
