import {Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {AppService} from "./services/AppService";
import {Researcher} from "./models/Researcher";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'res-client';
  public isLoggedIn = false;

  constructor(private service: AppService) {
    this.isLoggedIn = this.service.checkCredentials();
    // this.isLoggedIn = this.service.isUserLoggedIn();
  }

  login(): void {
    window.location.href =
      'http://localhost:9091/oauth/authorize?' +
      'response_type=code&scope=user&client_id=' +
      this.service.clientId + '&redirect_uri=' + this.service.redirectUri;
      // this.service.obtainAccessToken();
  }

  logout(): void {
    this.service.logout();
  }
}
