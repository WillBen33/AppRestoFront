import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../../api/services/language/language.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  setLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
}
