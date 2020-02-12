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
  private isEmailSame = false;
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
    this.localUsers = JSON.parse(localStorage.getItem('regUsers'));
  }
  registerForm() {
    if (localStorage.regUsers === undefined) {
      const users: any = [];
      users.push(this.regForm.value);
      localStorage.setItem('regUsers', JSON.stringify(users));
      this.router.navigate(['/Login']);
      alert('Registered successfully');
    } else {
        if (this.isUserExist(this.localUsers, this.regForm.value)) {
            alert ('User aleredy exist');
        } else {
          this.localUsers.push(this.regForm.value);
          localStorage.setItem('regUsers', JSON.stringify(this.localUsers));
          alert('Registered successfully');
          this.router.navigate(['/Login']);
        }
    }
  }
  isUserExist(setOfUsers , currentUsers) {
    for (const product of setOfUsers) {
      if (currentUsers.email !== product.email) {
        this.isEmailSame = false;
      } else {
        this.isEmailSame = true;
        return this.isEmailSame;
      }
    }
    return this.isEmailSame;
  }
}
