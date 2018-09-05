import { Component, OnInit, Input } from '@angular/core';
import { Condominiums } from './../../../../models/condominiums.model';

@Component({
  selector: 'app-condominiums',
  templateUrl: './condominiums.component.html',
  styleUrls: ['./condominiums.component.scss']
})
export class CondominiumsComponent implements OnInit {
  @Input() condominium: Condominiums;

  constructor() { }

  ngOnInit() {
  }

}
