import { Filial } from './../../../models/filial.model';
import { FilialService } from './../../../services/admin/filial.service';
import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";

const Store = require('electron-store');
const store = new Store();

@Component({
  selector: 'app-filials',
  templateUrl: './filials.component.html',
  styleUrls: ['./filials.component.scss']
})
export class FilialsComponent implements OnInit {

    filials: Filial[];

  constructor(private router: Router, private service: FilialService) {}

  ngOnInit() {
    this.service.getFilials()
      .subscribe( data => {
        this.filials = data;
      });
  }

  addFilial(){
    this.router.navigate(['admin/filials/add']);
  }

  deleteFilial(filial: Filial){
    this.service.deleteFilial(filial.id)
      .subscribe( data => {
        this.filials = this.filials.filter(f => f !== filial);
      })
  }

  editFilial(filial: Filial) {
    store.delete('editFilial');
    store.set('editFilial', filial.id);
    console.log('Filial: ');
    console.log(filial);
    this.router.navigate(['admin/filials/edit']);
  }
}
