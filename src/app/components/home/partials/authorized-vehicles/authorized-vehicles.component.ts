import { AuthorizedVehicles } from './../../../../models/authorized_vehicles.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authorized-vehicles',
  templateUrl: './authorized-vehicles.component.html',
  styleUrls: ['./authorized-vehicles.component.scss']
})
export class AuthorizedVehiclesComponent implements OnInit {
  @Input() authorized_vehicles: AuthorizedVehicles;
  constructor() { }

  ngOnInit() {
  }

}
