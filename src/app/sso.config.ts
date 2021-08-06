import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  // issuer: `${environment.authServerUrl}`,

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/home',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'resx-web',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'user',
  oidc: false,//or requestAccessToken: true
  showDebugInformation: true,
  silentRefreshRedirectUri: window.location.origin + '/home',

}
