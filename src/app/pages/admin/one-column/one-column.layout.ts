import { Component } from '@angular/core';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
  <nb-layout windowMode class="custom-layout">
  <nb-layout-header fixed >
    <ngx-admin-header></ngx-admin-header>
  </nb-layout-header>

  <nb-sidebar left tag="menu-sidebar" class="menu-sidebar" responsive>
    <ng-content  select="nb-menu"></ng-content>
  </nb-sidebar>

  <nb-layout-column class="custom-layout-column">
    <ng-content select="router-outlet"></ng-content>
  </nb-layout-column>
</nb-layout>
  `,
})
export class OneColumnLayoutComponent {}
