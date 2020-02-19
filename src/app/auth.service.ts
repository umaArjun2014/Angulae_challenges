import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Storing logged user data into local storage

  sendToken(getUser) {
    console.log(getUser)
    localStorage.setItem('LoggedUser', getUser);
  }
  getToken() {
    return localStorage.getItem('LoggedUser');
  }

  // this method will return logged users information
  isLoggedIn() {
    return JSON.parse(this.getToken());
  }
}
