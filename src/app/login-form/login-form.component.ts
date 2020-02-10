import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: any = {};
  constructor() { }

  ngOnInit() {
  }
  submitForm() {
    localStorage.setItem('loggedUser', JSON.stringify(this.loginForm));
  }

}
