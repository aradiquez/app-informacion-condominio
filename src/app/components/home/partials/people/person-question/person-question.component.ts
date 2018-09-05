import { PersonQuestion } from './../../../../../models/person_question.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-question',
  templateUrl: './person-question.component.html',
  styleUrls: ['./person-question.component.scss']
})
export class PersonQuestionComponent implements OnInit {
  @Input() person_question: PersonQuestion[];
  @Input() type: number;
  constructor() { }

  ngOnInit() {
  }

}
