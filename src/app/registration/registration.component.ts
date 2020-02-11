import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public localUsers = [];
  public password = new FormControl('', Validators.required);
  public cpassword = new FormControl('', CustomValidators.equalTo(this.password));

  regForm: FormGroup = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', [Validators.required, Validators.minLength(6)]],
    password: this.password,
    cpassword: this.cpassword,
    gender: ['', Validators.required],
    agreeTerms: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }
  registerForm() {
    if (localStorage.regUsers === undefined) {
      this.localUsers.push(this.regForm.value);
      localStorage.setItem('regUsers', JSON.stringify(this.localUsers));
      this.router.navigate(['/Login']);
      alert('Registered successfully');
    } else {
      let users: any = [];
      users = JSON.parse(localStorage.getItem('regUsers'));
      for (const product of users) {
        if (product.email !== this.regForm.value.email) {
          this.localUsers.push(this.regForm.value);
          localStorage.setItem('regUsers', JSON.stringify(this.localUsers));
          alert('Registered successfully');
          this.router.navigate(['/Login']);
        } else {
          alert('user already exist');
        }
      }
    }
  }

}
