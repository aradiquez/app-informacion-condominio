import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PersonType } from './../../models/person_type.model';

import { Observable } from 'rxjs/Observable';
const config = require('./../../../assets/config.json');
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private BASE_URL: string = config.api.base_url + '/person_types';

  constructor(private http: HttpClient) { }

  getPersonTypes() {
    return this.http.get<PersonType[]>(this.BASE_URL)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));;
  }

  getPersonTypeById(id: number) {
    return this.http.get<PersonType>(this.BASE_URL + '/' + id)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));;
  }

  createPersonType(person_type: PersonType) {
    return this.http.post(this.BASE_URL, person_type)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));;
  }

  updatePersonType(person_type: PersonType) {
    return this.http.put(this.BASE_URL + '/' + person_type.id, person_type)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));;
  }

  deletePersonType(id: number) {
    return this.http.delete(this.BASE_URL + '/' + id)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));;
  }

  errorHandler(error: any): void {
    console.log('ERROR: ');
    console.log(error);
  }
}
