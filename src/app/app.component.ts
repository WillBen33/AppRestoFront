import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { take } from 'rxjs/operators';
import {LanguageService} from './services/language/language.service';

@Component({
  selector: 'app-root',
  template: `
     <router-outlet></router-outlet> 
  `,
})
export class AppComponent  implements OnInit{
  title = 'ui';
  apiBaseUrl:string = "http://localhost:8081/restaurant";
  constructor(private languageService: LanguageService, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get(`${this.apiBaseUrl}/users/1`).pipe(take(1)).subscribe();
  }

  changeLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
}
