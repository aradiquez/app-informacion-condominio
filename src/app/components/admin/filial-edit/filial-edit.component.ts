import { Router } from '@angular/router';
import { FilialService } from './../../../services/admin/filial.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

const Store = require('electron-store');
const store = new Store();

@Component({
  selector: 'app-filial-edit',
  templateUrl: './filial-edit.component.html',
  styleUrls: ['./filial-edit.component.scss']
})
export class FilialEditComponent implements OnInit {

  filialEditForm: FormGroup;

  constructor(private router: Router, private service: FilialService, private fb: FormBuilder) { }

  ngOnInit() {
    let filialId = store.get("editFilial");
    if(!filialId) {
      alert("Invalid action.");
      store.delete("editFilial");
      this.router.navigate(['admin/filials']);
      return;
    }

    this.filialEditForm = this.fb.group({
      number: [],
      filial_name: [],
      condominiums: this.fb.array([]),
      condominium_childs: this.fb.array([]),
      authorized_vehicles: this.fb.array([]),
      people: this.fb.array([])
    });

    this.service.getFilialById(filialId)
      .subscribe( data => {
        console.log('Data');
        console.log(data);
        console.log('--------------------------');
        console.log(data['condominiums']);
        console.log('--------------------------');
        // this.filialEditForm.setValue(data);
        console.log('--------------------------');
        this.CondominiumsForm.setValue(data['condominiums']);
        console.log('--------------------------');
        this.CondominiumChildsForm.setValue(data['condominium_childs']);
        console.log('--------------------------');
        this.AuthorizedVehiclesForm.setValue(data['authorized_vehicles']);
        console.log('--------------------------');
        this.PeopleForm.setValue(data['people']);
        console.log('--------------------------');
      });
  }

  onSubmit() {

  }

  // Condominiums
  get CondominiumsForm() {
    return this.filialEditForm.get('condominiums') as FormArray
  }

  addCondominiums(){
    const condominia = this.fb.group(
      {
        id: [],
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
    return this.filialEditForm.get('condominium_childs') as FormArray
  }

  addCondominiumChilds() {
    const condominium_childs = this.fb.group(
      {
        id: [],
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        identification: ['', Validators.required],
        car_plate: ['']
      }
    );
    this.CondominiumChildsForm.push(condominium_childs);
  }

  removeCondominiumChilds(i) {
    this.CondominiumChildsForm.removeAt(i);
  }

  // Authorized Vehicles
  get AuthorizedVehiclesForm() {
    return this.filialEditForm.get('authorized_vehicles') as FormArray
  }

  addAuthorizedVehicles() {
    const authorized_vehicles = this.fb.group(
      {
        id: [],
        car_plate: ['', Validators.required],
        brand: ['', Validators.required],
        color: ['', Validators.required],
        style: ['', Validators.required],
        other: ['']
      }
    );
    this.AuthorizedVehiclesForm.push(authorized_vehicles);
  }
  removeAuthorizedVehicles(i) {
    this.AuthorizedVehiclesForm.removeAt(i);
  }

  // People 
  get PeopleForm() {
    return this.filialEditForm.get('people') as FormArray
  }

  addPeople() {
    const people = this.fb.group(
      {
        id: [],
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        identification: ['', Validators.required],
        nationality: ['', Validators.required],
        car_plate: ['', Validators.required],
        person_type_id: ['', Validators.required],
        person_question: this.fb.group(
          {
            id: [],
            question: this.fb.group({
              id: [],
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
            id: [],
            start_time: [''],
            end_time: [''],
            monday: [false],
            tuesday: [false],
            wednesday: [false],
            thursday: [false],
            friday: [false],
            saturday: [false],
            sunday: [false],
            holidays: [false]
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
