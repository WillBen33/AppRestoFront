import {Component, OnInit} from '@angular/core';
import { AuthenticationControllerService } from './api/services';
import {LanguageService} from './services/language/language.service';

@Component({
  selector: 'app-root',
  template: `
     <router-outlet></router-outlet> 
  `,
})
export class AppComponent  implements OnInit{
  constructor(private languageService: LanguageService,
     private authService: AuthenticationControllerService) 
   {
  }

  ngOnInit(): void {
    this.authService.getXsrfCookie().subscribe();
  }

  changeLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
}
