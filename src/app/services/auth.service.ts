import { Output, Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { CryptoServiceService } from './crypto-service.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
const config = require('../../assets/config.json');
const Store = require('electron-store');
const store = new Store();
import { CurrentUser } from '../models/current-user.model'

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private BASE_URL: string = config.api.base_url;
  private  headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  public      data: CurrentUser;
  @Output() loggedIn = new EventEmitter<boolean>();

  constructor(
    private    http: HttpClient,
    private  crypt: CryptoServiceService) { }

  login(username: string, password: string) {
    let params = { "login": username, "password": password };
    this.validUser(params);
    return this.post_call(params);
  }

  private validUser(params) {
    this.post_call(params).subscribe( (user: CurrentUser) => {
      this.loggedIn.emit(true);
      this.data = user;
      this.data['password'] = params.password;
      this.saveInLocal(config.global_user_key, this.data);
      this.saveInLocal(config.global_creds_key, params);
    });
  }

  private post_call(params): Observable<CurrentUser> {
    return this.http.post<CurrentUser>(this.login_url(), params, { headers: this.authenticationHeader(params) , responseType: 'json'});
  }

  private login_url() {
    return `${this.BASE_URL}login`;
  }

  private authenticationHeader(params) {
    return this.headers = this.headers.set('Authorization', "Basic " + btoa(`${params['login']}:${params['password']}`));
  }

  private saveInLocal(key, val): void {
    // let result = this.crypt.encrypt(val, config.config_global_key);
    store.set(key, val);
  }
}
