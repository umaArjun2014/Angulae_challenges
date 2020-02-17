import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  currentUserInfo = {};
  constructor() { }

  getUsersFromLocal() {
    return JSON.parse(localStorage.getItem('regUsers'));
  }
  getUserInfo(userInfo) {
    this.currentUserInfo = userInfo;
  }
  sendUserInfo() {
    return this.currentUserInfo;
  }
}
