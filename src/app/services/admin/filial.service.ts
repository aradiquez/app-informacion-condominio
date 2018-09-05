import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Filial } from './../../models/filial.model';

import { Observable } from 'rxjs/Observable';
const config = require('./../../../assets/config.json');
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class FilialService {
  private BASE_URL: string = config.api.base_url + '/filials';

  constructor(private http: HttpClient) { }

  getFilials() {
    return this.http.get<Filial[]>(this.BASE_URL)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));;
  }

  getFilialById(id: number) {
    return this.http.get<Filial>(this.BASE_URL + '/' + id)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));;
  }

  createFilial(filial: Filial) {
    return this.http.post(this.BASE_URL, filial)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));;
  }

  updateFilial(filial: Filial) {
    return this.http.put(this.BASE_URL + '/' + filial.id, filial)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));;
  }

  deleteFilial(id: number) {
    return this.http.delete(this.BASE_URL + '/' + id)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));;
  }

  errorHandler(error: any): void {
    console.log('ERROR: ');
    console.log(error);
  }
}
