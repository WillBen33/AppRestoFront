import {Component, OnInit} from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import {LanguageService} from "../../services/language/language.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;
  user : any = {};

  constructor(private languageService: LanguageService,
    private nbAuthService: NbAuthService) {
      this.nbAuthService.onTokenChange()
      .subscribe(token => {
      
        if (token.isValid()) {
          this.user = token.getPayload(); 
          console.log(this.user);// here we receive a payload from the token and assigns it to our `user` variable 
        }
        
      });
  }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  setLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
}
