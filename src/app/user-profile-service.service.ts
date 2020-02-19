import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileServiceService {
  private dataSource = new BehaviorSubject (JSON.parse(localStorage.getItem('LoggedUser')));
  currentUser = this.dataSource.asObservable();
  constructor() { }
  // setting updated value to the observable
  setUpdatedName(currentUserName) {
    this.dataSource.next(currentUserName);
  }
}
