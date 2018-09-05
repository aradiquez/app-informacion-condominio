import { TestBed, inject } from '@angular/core/testing';

import { PersonTypeService } from './person-type.service';

describe('PersonTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonTypeService]
    });
  });

  it('should be created', inject([PersonTypeService], (service: PersonTypeService) => {
    expect(service).toBeTruthy();
  }));
});
