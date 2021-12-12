import {Component} from '@angular/core';
import {LanguageService} from './api/services/language/language.service';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {
  title = 'ui';

  constructor(private languageService: LanguageService) {
  }

  changeLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
}
