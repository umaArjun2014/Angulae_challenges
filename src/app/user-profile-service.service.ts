import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileServiceService {
  private dataSource = new BehaviorSubject (JSON.parse(localStorage.getItem('LoggedUser')));
  currentUser = this.dataSource.asObservable();
  constructor() { }
  setUpdatedName(currentUserName) {
    this.dataSource.next(currentUserName);
    console.log(this.dataSource);
  }
}
