import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

get f() { return this.userForm.controls; }

  submit() {
    if (localStorage.getItem('regUsers') === undefined) {
      alert('please register befor log in');
    } else {
      const regUsersList = JSON.parse(localStorage.getItem('regUsers'));
      for (const user of regUsersList) {
        if (user.email !== this.userForm.value.username) {
          alert('Please register before login !');
        } else {
          alert(' logged successfully!! ');
          this.router.navigate(['/Dashboard']);
        }
      }
    }
  }
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

}
