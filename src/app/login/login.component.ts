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
  userForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { }

get f() { return this.userForm.controls; }

  submit() {
    if (localStorage.getItem('regUsers') === undefined) {
      alert('please register befor log in');
    } else {
      const regUsersList = JSON.parse(localStorage.getItem('regUsers'));
      if (this.isUserExist(regUsersList, this.userForm)) {
          alert ('Logged Successfully');
          this.auth.sendToken(JSON.stringify(this.userForm.value));
          this.router.navigate(['/dashboard']);
      } else {
        alert ('Please register before login !!!');
      }
    }
  }
  isUserExist(usersList, logged) {
    for (const user of usersList) {
      if (user.email !== logged.value.username) {
        this.isUserMatch = false;
      } else {
        this.isUserMatch = true;
        return this.isUserMatch;
      }
    }
    return this.isUserMatch;
  }

  ngOnInit() {
  }

}
