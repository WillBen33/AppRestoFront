import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from "./templates/layout/layout.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
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
        path: 'menu',
        loadChildren: () =>
          import('./pages/menu/menu.module').then((m) => m.MenuModule),
      },
      {
        path: 'deals',
        loadChildren: () =>
          import('./pages/deals/deals.module').then((m) => m.DealsModule),
      },
      {
        path: 'approach',
        loadChildren: () =>
          import('./pages/approach/approach.module').then((m) => m.ApproachModule),
      },
      {
        path: 'join',
        loadChildren: () =>
          import('./pages/join/join.module').then((m) => m.JoinModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./pages/contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./pages/account/account.module').then((m) => m.AccountModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
      ,
      {
        path:'**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
