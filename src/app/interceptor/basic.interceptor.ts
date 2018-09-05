import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
const Store = require('electron-store');
const store = new Store();
const config = require('../../assets/config.json');

@Injectable()
export class BasicInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (
      request.url === `${config.api.base_url}login` ||
      request.url === "./assets/i18n/en.json"
    ) {
      return next.handle(request);
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'responseType':  'json',
        'Authorization': this.authenticationHeader()
      })
    };

    // add a custom header
    const headerRequest = request.clone({
      headers: httpOptions.headers
    });
    return next.handle(headerRequest);
  }

  private authenticationHeader() {
    let creds = store.get(config.global_creds_key);
    return "Basic " + btoa(`${creds['login']}:${creds['password']}`);
  }
}
