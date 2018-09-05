import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonQuestionComponent } from './person-question.component';

describe('PersonQuestionComponent', () => {
  let component: PersonQuestionComponent;
  let fixture: ComponentFixture<PersonQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
