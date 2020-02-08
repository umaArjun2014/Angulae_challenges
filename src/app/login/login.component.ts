import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm : FormGroup;
  public displayTable = false;
  public userName = {
    typeValue: 'text',
    name: 'username',
    placeholderValue: 'Please enter Username',
  };
  public password = {
      typeValue: 'password',
      name: 'password',
      placeholderValue: 'Please enter Password'
  };
  public button = {
    type: 'button',
    value: 'Submit'
  };
  constructor(private fb: FormBuilder) {}
  loginForm = this.fb.group({});
  ngOnInit() {
  }
  switchToTable() {
    this.displayTable = true;
  }

}
