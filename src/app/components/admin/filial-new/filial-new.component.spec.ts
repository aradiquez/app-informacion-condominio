import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialNewComponent } from './filial-new.component';

describe('FilialNewComponent', () => {
  let component: FilialNewComponent;
  let fixture: ComponentFixture<FilialNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
