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
    // this.loggedUser = JSON.parse(localStorage.getItem('LoggedUser')).fullname;
  }

  ngOnInit() {
    this.profile.currentUser.subscribe((loggedUser) => {this.loggedUser = loggedUser; });
    console.log(this.loggedUser);
  }
  logout() {
    this.route.navigate(['/login']);
  }
}
