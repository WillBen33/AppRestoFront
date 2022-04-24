import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { NbWindowService } from '@nebular/theme';
import { filter } from 'rxjs/operators';
import { NgxLoginComponent } from '../ngx-login/ngx-login.component';

@Component({
  selector: 'app-login-checkout',
  templateUrl: './login-checkout.component.html',
  styleUrls: ['./login-checkout.component.scss']
})
export class LoginCheckoutComponent implements OnInit {

  OngoingOrder: boolean = true;
  user : any = {};
  errors: string[] = [];
  submitted: boolean = false;
  constructor(private windowService: NbWindowService,
    private nbAuthService: NbAuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    this.windowService.open(NgxLoginComponent).onClose.pipe(filter(res => res === "submit")).subscribe(() => this.router.navigate(['commande/confirmCommande']));
  }

  signUp() {
    this.router.navigate(['/auth/register']);
  }

  guessForm() {
    this.router.navigate(['commande/confirmCommande']);
  }

  customLogin()
  {
    this.submitted = false;
    this.nbAuthService.authenticate("email", this.user).subscribe(nbAuthResult => {
      if (nbAuthResult.isSuccess()) 
        this.router.navigate(['commande/confirmCommande']);
      else
      this.errors = nbAuthResult.getErrors();
    })
  }

}
