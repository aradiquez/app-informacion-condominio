import { People } from './../../../../models/people.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  @Input() people: People;
  @Input() type: number;
  
  constructor() { }

  ngOnInit() {
  }

}
