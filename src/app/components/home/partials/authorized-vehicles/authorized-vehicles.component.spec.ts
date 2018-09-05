import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedVehiclesComponent } from './authorized-vehicles.component';

describe('AuthorizedVehiclesComponent', () => {
  let component: AuthorizedVehiclesComponent;
  let fixture: ComponentFixture<AuthorizedVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
