import { CondominiumChilds } from './../../../../models/condominium_childs.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-condominium-childs',
  templateUrl: './condominium-childs.component.html',
  styleUrls: ['./condominium-childs.component.scss']
})
export class CondominiumChildsComponent implements OnInit {
  @Input() condominium_childs: CondominiumChilds;
  constructor() { }

  ngOnInit() {
  }

}
