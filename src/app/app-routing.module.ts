import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./templates/layout/layout.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./pages/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./pages/contact/contact.module').then((m) => m.ContactModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
