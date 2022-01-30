import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbRequestPasswordComponent, NB_AUTH_OPTIONS } from '@nebular/auth';

@Component({
  selector: 'app-ngx-request-password',
  templateUrl: './ngx-request-password.component.html',
  styleUrls: ['./ngx-request-password.component.scss']
})
export class NgxRequestPasswordComponent extends NbRequestPasswordComponent implements OnInit {

  constructor(nbAuthService: NbAuthService, @Inject(NB_AUTH_OPTIONS) protected options = {}, cd: ChangeDetectorRef, router: Router) {
    super(nbAuthService, options, cd, router);
  }

  ngOnInit(): void {
  }

}
