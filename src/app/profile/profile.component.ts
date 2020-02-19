import { Component, AfterViewInit  } from '@angular/core';
import { UserProfileServiceService } from '../user-profile-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  public loggedUserProfile = '';
  constructor(private profile: UserProfileServiceService) { }

  // fetch logged user info for top bar
  AfterViewInit() {
    this.loggedUserProfile = JSON.parse(localStorage.getItem('LoggedUser'));
  }

  // altered user name is updating in the top bar by saving into profile variable
  modelChanged(data) {
    this.profile.setUpdatedName(data);
  }

}
