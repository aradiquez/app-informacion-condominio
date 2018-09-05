import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Filial } from '../models/filial.model';

import { Observable } from 'rxjs/Observable';
const config = require('../../assets/config.json');
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class FilialService {

  private BASE_URL: string = config.api.base_url;

  constructor(private http: HttpClient) { }

  searchFilial(filial_number: number): Observable<Filial> {
    return this.http.get<Filial>(this.filials_url(filial_number))
    .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

  errorHandler(error: any): void {
    console.log('ERROR: ');
    console.log(error);
  }

  private filials_url(number: number) {
    return `${this.BASE_URL}/filials/${number}`;
  }
}
