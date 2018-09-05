import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominiumChildsComponent } from './condominium-childs.component';

describe('CondominiumChildsComponent', () => {
  let component: CondominiumChildsComponent;
  let fixture: ComponentFixture<CondominiumChildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondominiumChildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominiumChildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
