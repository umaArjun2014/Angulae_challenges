import { Component, OnInit } from '@angular/core';
import { UserProfileServiceService } from '../user-profile-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public loggedUserProfile;
  constructor(private profile: UserProfileServiceService) { }

  ngOnInit() {
    this.loggedUserProfile = JSON.parse(localStorage.getItem('LoggedUser'));

  }
  modelChanged(data) {
    this.profile.setUpdatedName(data);
  }

}
