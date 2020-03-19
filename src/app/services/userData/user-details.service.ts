import { Injectable } from '@angular/core';
import { LocalStorageEnums } from '../../localEnums';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  currentUserInfo = {};
  constructor() { }
  // fetch registered users from local
  getUsersFromLocal() {
    return JSON.parse(localStorage.getItem(LocalStorageEnums.REGUSERS));
  }
  // storing current user info into a variable
  getUserInfo(userInfo) {
    this.currentUserInfo = userInfo;
  }

  // sending current user info
  sendUserInfo() {
    return this.currentUserInfo;
  }
  retrieveLoggedUser() {
    return localStorage.getItem(LocalStorageEnums.LOGGEDUSER);
  }
}
