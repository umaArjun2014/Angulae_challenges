import { Component, OnInit } from '@angular/core';
import { UserProfileServiceService } from '../user-profile-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  loggedUser;
  constructor(private profile: UserProfileServiceService, private route: Router) {
  }

  // To show the username on topbar, by retrieving logged user
  ngOnInit() {
    this.profile.currentUser.subscribe((loggedUser) => {this.loggedUser = loggedUser; });
  }

  // User will navigate lo login page once he logout the application
  logout() {
    localStorage.removeItem('LoggedUser');
    this.route.navigate(['/login']);
  }
}
