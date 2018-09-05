import { PersonSchedule } from './../../../../../models/person_schedule.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-schedule',
  templateUrl: './person-schedule.component.html',
  styleUrls: ['./person-schedule.component.scss']
})
export class PersonScheduleComponent implements OnInit {
  @Input() person_schedule: PersonSchedule;
  constructor() { }

  ngOnInit() {
  }

}
