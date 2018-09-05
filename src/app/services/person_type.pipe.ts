import { Pipe, PipeTransform } from '@angular/core';

import { People } from '../models/people.model';

@Pipe({ name: 'peopleTypes' })
export class PeopleTypePipe implements PipeTransform {
  transform(people: People[], type: number) {
    return people.filter(person => {
        return person.person_type_id == type
    });
  }
}
