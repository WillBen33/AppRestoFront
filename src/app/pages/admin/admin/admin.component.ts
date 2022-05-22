import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin',
  template: `
  <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
`,
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  menu:NbMenuItem[] = [];

  constructor(private translateService:TranslateService) {
    this.menu = [
      {
        title: this.translateService.instant("admin.cartManagement"),
        children:[
          {
            title:this.translateService.instant("admin.productList"),
            link:'products'
          },
          {
            title: this.translateService.instant("admin.categoryList"),
            link: 'categories'
          },
          {
            title: this.translateService.instant("admin.allergenList"),
            link: 'allergens'
          }
        ]
      }
    ];
   }

  ngOnInit(): void {
  }

}
