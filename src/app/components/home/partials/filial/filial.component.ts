import { Filial } from './../../../../models/filial.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filial',
  templateUrl: './filial.component.html',
  styleUrls: ['./filial.component.scss']
})
export class FilialComponent implements OnInit {
  @Input() filial: Filial;

  constructor() { }

  ngOnInit() {
  }

}
