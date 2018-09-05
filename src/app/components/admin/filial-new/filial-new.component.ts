import { Router } from '@angular/router';
import { FilialService } from './../../../services/admin/filial.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-filial-new',
  templateUrl: './filial-new.component.html',
  styleUrls: ['./filial-new.component.scss']
})
export class FilialNewComponent implements OnInit {

  filialForm: FormGroup;

  constructor(private router: Router, private service: FilialService, private fb: FormBuilder) {}

  ngOnInit() {
  
    this.filialForm = this.fb.group({
      number: [],
      filial_name: [],
      condominia: this.fb.array([]),
      condominium_childs: this.fb.array([]),
      authorized_vehicles: this.fb.array([]),
      people: this.fb.array([])
    });
  }

  onSubmit() {
    this.service.createFilial(this.filialForm.value)
      .subscribe( data => {
        this.router.navigate(['/admin/filials']);
      });
  }

  // Condominiums
  get CondominiumsForm() {
    return this.filialForm.get('condominiums') as FormArray
  }

  addCondominiums(){
    const condominia = this.fb.group(
      {
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        identification: ['', Validators.required],
        phone_number: ['', Validators.required],
        status: ['1', Validators.required],
        active: ['', Validators.required],
        birthday: ['', Validators.required]
      }
    );
    this.CondominiumsForm.push(condominia);
  }

  removeCondominiums(i) {
    this.CondominiumsForm.removeAt(i);
  }

  // Condominums childs
  get CondominiumChildsForm() {
    return this.filialForm.get('condominium_childs') as FormArray
  }

  addCondominiumChilds() {
    const condominium_childs = this.fb.group(
      {
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        identification: ['', Validators.required],
        car_plate: ['', Validators.required],
        filial_id: ['', Validators.required]
      }
    );
    this.CondominiumChildsForm.push(condominium_childs);
  }

  removeCondominiumChilds(i) {
    this.CondominiumChildsForm.removeAt(i);
  }

  // Authorized Vehicles
  get AuthorizedVehiclesForm() {
    return this.filialForm.get('authorized_vehicles') as FormArray
  }

  addAuthorizedVehicles() {
    const authorized_vehicles = this.fb.group(
      {
        car_plate: ['', Validators.required],
        brand: ['', Validators.required],
        color: ['', Validators.required],
        style: ['', Validators.required],
        other: [''],
        filial_id: ['', Validators.required]
      }
    );
    this.AuthorizedVehiclesForm.push(authorized_vehicles);
  }
  removeAuthorizedVehicles(i) {
    this.AuthorizedVehiclesForm.removeAt(i);
  }

  // People 
  get PeopleForm() {
    return this.filialForm.get('people') as FormArray
  }

  addPeople() {
    const people = this.fb.group(
      {
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        identification: ['', Validators.required],
        nationality: ['', Validators.required],
        car_plate: ['', Validators.required],
        person_type_id: ['', Validators.required],
        filial_id: ['', Validators.required],
        person_question: this.fb.group(
          {
            person_id: ['', Validators.required],
            question: this.fb.group({
              question: ['', Validators.required],
              active: [true, Validators.required],
              required: [false, Validators.required],
              person_type_id: ['', Validators.required]
            }),
            status: ['', Validators.required]
          }
        ),
        person_schedule: this.fb.group(
          {
            person_id: ['', Validators.required],
            start_time: ['', Validators.required],
            end_time: ['', Validators.required],
            monday: [false, Validators.required],
            tuesday: [false, Validators.required],
            wednesday: [false, Validators.required],
            thursday: [false, Validators.required],
            friday: [false, Validators.required],
            saturday: [false, Validators.required],
            sunday: [false, Validators.required],
            holidays: [false, Validators.required]
          }
        )
      }
    );
    this.PeopleForm.push(people);
  }

  removePeople(i) {
    this.PeopleForm.removeAt(i);
  }
}
