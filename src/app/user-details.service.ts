import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  currentUserInfo = {};
  constructor() { }
  // fetch registered users from local
  getUsersFromLocal() {
    return JSON.parse(localStorage.getItem('regUsers'));
  }
  // storing current user info into a variable
  getUserInfo(userInfo) {
    this.currentUserInfo = userInfo;
  }

  // sending current user info
  sendUserInfo() {
    return this.currentUserInfo;
  }
}
