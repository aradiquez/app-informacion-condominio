import { CurrentUser } from './../../models/current-user.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { FilialService } from './../../services/filial.service';
import { FormControl } from '@angular/forms';

import { Filial } from './../../models/filial.model';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of' 

const config = require('./../../../assets/config.json');
const Store = require('electron-store');
const store = new Store();


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [FilialService]
})
export class HomeComponent implements OnInit {
  status: string = 'inactive';
  filialInformation: Observable<Filial>;
  searchField: FormControl;
  creds: CurrentUser;

  constructor(private service_filial: FilialService,
              private router: Router) {}

  ngOnInit() {
    this.checkUserType();
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(800)
      .distinctUntilChanged()
      .filter( res => this.validFilialNumber(res) )
      .switchMap((res) => { 
        if (res === '') {
          this.status = 'inactive';
          return this.filialInformation = Observable.of(null);
        }
        this.status = 'active';
        return this.filialInformation = this.service_filial.searchFilial(res.toString().trim())
      }) 
      .subscribe(() => {},
        err => {
          throw err;
      });
  }

  checkUserType() {
    this.creds = store.get(config.global_user_key);
  }

  validFilialNumber(filial) {
    if(filial >=1 && filial <= 74 ){
      return true;
    }
    this.status = 'inactive';
    this.filialInformation = Observable.of(null);
    return false;
  }

  disconnect() {
    store.delete(config.global_user_key);
    store.delete(config.global_creds_key);
    store.clear();
    this.router.navigate(['screen']);
  }

  goAdmin() {
    this.router.navigate(['admin']);
  }

}
