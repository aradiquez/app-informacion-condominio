import { Component, OnInit } from '@angular/core';
// const config = require('./../../../../assets/config.json');

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  default = [
    'filials', 
    'questions'
  ]

  constructor() { }

  ngOnInit() {
  }

}
