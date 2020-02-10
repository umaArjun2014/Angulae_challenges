import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-details-reactive',
  templateUrl: './personal-details-reactive.component.html',
  styleUrls: ['./personal-details-reactive.component.css']
})
export class PersonalDetailsReactiveComponent implements OnInit {
  setOfSkills: FormArray = new FormArray([]);
  personalDetails: FormGroup;
  constructor(private fb: FormBuilder) { }



  ngOnInit() {
    this.personalDetails = this.fb.group({
      firstName: ['', Validators.required],
      age: [''],
      gender: ['', Validators.required],
      address1: ['Hyderabad'],
      address2: ['hyderabad'],
      skillSet: new FormArray([])
    });
  }
  get f() { return this.personalDetails.controls; }

  personalData() {
    localStorage.setItem('reactiveFilledForm', this.personalDetails.value);
  }
  addSkillset() {
    this.setOfSkills = this.personalDetails.controls.skillSet as FormArray;
    (this.setOfSkills).push(this.fb.group({
      skills: ['', Validators.required]
    }));
  }
  removeSkill(index) {
    this.setOfSkills.controls.splice(index, 1);
  }
}
