import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthResult, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private nbAuthService: NbAuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // va servir à déconnecter l'utilisateur quand le composant ou bouton sera prêt
   logout() {
    this.nbAuthService.logout('email').subscribe((result: NbAuthResult) => {

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, 500);
      }
    })
  }
}
