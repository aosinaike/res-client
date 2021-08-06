import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Cookie } from 'ng2-cookies';
import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {CustomAccessToken} from '../models/CustomAccessToken';
import {Router} from "@angular/router";
import {OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from "../sso.config";

@Injectable()
export class AppService {
  public clientId = 'resx-web';
  public redirectUri = 'http://localhost:4200/home';
  public isLoggedIn = false;

  constructor(private http: HttpClient, private _router: Router, private oauthService: OAuthService){
    this.oauthService.configure({
      loginUrl: 'http://localhost:9091/oauth/authorize',
      redirectUri: this.redirectUri,
      clientId: this.clientId,
      scope: 'user',
      oidc: false,
      // requestAccessToken: true,
      showDebugInformation: true,
    });
    // this.oauthService.configure(authConfig);
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.tryLogin({});
  }

  retrieveToken(code: string): void {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', this.clientId);
    params.append('client_secret', 'web01$3k^#T');
    params.append('redirect_uri', this.redirectUri);
    params.append('code', code.split('&')[0]);
    const headers =
      new HttpHeaders({'Access-Control-Allow-Origin': '*','Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});
    this.http.post('http://localhost:9091/oauth/token',
      params.toString(), { headers })
      .subscribe(
        data => {this.saveToken(data);},
        err => {console.log(err)});
  }

  saveToken(headers): void {
    const expireDate = new Date().getTime() + (1000 * headers.expires_in);
    Cookie.set('rdx', headers.access_token, expireDate);
    console.log('Obtained Access token');
    this.isLoggedIn = true;
    window.location.href = 'http://localhost:4200/home';
  }

  getResource(resourceUrl: string): Observable<any> {
    var headers = new HttpHeaders({
      // 'Access-Control-Allow-Origin': '*',
      // 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer '+Cookie.get('rdx')
      // 'Authorization': 'Bearer '+this.oauthService.getAccessToken()
    });
    return this.http.get(resourceUrl, { headers }).pipe(
      catchError((error: any) => throwError(error || 'Server error')));
  }

  checkCredentials(): boolean {
    return Cookie.check('rdx');
  }

  logout(): void {
    Cookie.delete('rdx');
    window.location.reload();
    // this.oauthService.logOut();
    // location.reload();
  }

  obtainAccessToken(): void{
    this.oauthService.initImplicitFlow();
  }

  isUserLoggedIn(): boolean{
    console.log(this.oauthService.getAccessToken());
    if (this.oauthService.getAccessToken() === null){
      return false;
    }
    return true;
  }
}
