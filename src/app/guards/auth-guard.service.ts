import { Injectable } from '@angular/core';
import {AppService} from "../services/AppService";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _authService: AppService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._authService.checkCredentials()) {
      return true;
    }
    const i = window.location.href.indexOf('code');
    console.log(i);
    if (i !== -1 ) {
      this._authService.retrieveToken(window.location.href.substring(i + 5));
    }
    // if (this._authService.isUserLoggedIn()) {
    //   return true;
    // }
    return false;
  }
}
