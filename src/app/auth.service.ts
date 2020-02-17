import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  sendToken(getUser) {
    localStorage.setItem('LoggedUser', getUser);
  }
  getToken() {
    return localStorage.getItem('LoggedUser');
  }
  isLoggedIn() {
    return JSON.parse(this.getToken());
  }
}
