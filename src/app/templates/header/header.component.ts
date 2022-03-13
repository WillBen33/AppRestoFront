import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { LanguageService } from "../../services/language/language.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  navbarOpen = false;
  user: any = {};
  isAuthenticated: boolean = false;

  constructor(private languageService: LanguageService,
    private nbAuthService: NbAuthService,
    private router: Router,
    private shoppingCartService: ShoppingCartService) {
    this.nbAuthService.onTokenChange()
      .subscribe(token => {
        if (token.isValid()) {
          this.isAuthenticated = true;
          this.user = token.getPayload();
        }
      });
  }

  ngOnInit(): void {
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  setLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }

  updateProfil(): void {
    this.router.navigate(['/account/profil']);
  }

  displayCommandes() {
    // A développer 
  }

  logout(): void {
    this.nbAuthService.logout('email').subscribe((result: NbAuthResult) => {
      this.isAuthenticated = false;
      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, 500);
      }
    })
  }

  signUp(): void {
    this.router.navigate(['/auth/register']);
  }

  signIn(): void {
    this.router.navigate(['/auth/sign-in']);
  }

  getToTalProcuct() {
    return this.shoppingCartService.getNbProductInCart();
  }

  showCommandes()
  {

  }
}
