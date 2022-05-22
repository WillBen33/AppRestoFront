import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NbAccessChecker } from '@nebular/security';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminRoleGuard implements CanActivate {

  constructor(private router: Router,
    private accessChecker: NbAccessChecker) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.accessChecker.isGranted('view', 'admin').pipe(
      tap(result => {
        if (!result) {
          this.router.navigate(['auth/sign-in']);
        }})
    )
  }

}
