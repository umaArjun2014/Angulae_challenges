import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private isUserMatch = false;
  private isPasswordMatch = false;
  userForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { }

// get f() { return this.userForm.controls; }

  submit() {
    if (localStorage.getItem('regUsers') === undefined) {
      alert('please register befor log in');
    } else {
      const regUsersList = JSON.parse(localStorage.getItem('regUsers'));
      this.isUserExist(regUsersList, this.userForm);
      if (this.isUserMatch && this.isPasswordMatch) {
          alert ('Logged Successfully');
          this.auth.sendToken(JSON.stringify(this.isUserExist(regUsersList, this.userForm)));
          this.router.navigate(['/dashboard']);
      } else if (this.isUserMatch && !this.isPasswordMatch) {
        alert('Incorrect password has been entered, please try again');
      } else {
        alert ('Please register before login !!!');
      }
    }
  }
  isUserExist(usersList, logged) {
    for (const user of usersList) {
      if (user.email === logged.value.username && user.isPasswordMatch === user.isPasswordMatch) {
        this.isUserMatch = true;
        this.isPasswordMatch = true;
        return user;
      } else if (user.email === logged.value.username && user.isPasswordMatch !== user.isPasswordMatch) {
        this.isUserMatch = true;
        this.isPasswordMatch = false;
      } else {
        this.isUserMatch = false;
        this.isPasswordMatch = false;

      }
    }
    // return this.isUserMatch;
  }

  ngOnInit() {
  }

}
