import { Component, OnInit, HostListener, HostBinding} from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public usersList = [];
  userExist;
  private timoutWarning = 30000;
  private timoutNow = 60000;
  private warningTimer;
  displayedColumns: string[] = ['email', 'fullname', 'phone', 'gender'];
  @HostBinding('class.hostBinding') public isUserActive: boolean;
  constructor(private userService: UserDetailsService, private router: Router) {
    this.StartTimers();
  }

  ngOnInit() {
    this.isUserActive = false;
    this.usersList = this.userService.getUsersFromLocal();
  }
  getUserInfo(userData) {
    this.userService.getUserInfo(userData);
    this.router.navigate(['/UserInfo', {id: userData.id}]);
  }
  private idleWarning = () => {
    alert('your ideal since longer,appln is going to logout');
    this.router.navigate(['/Login']);
  }

   ResetTimers() {
    clearTimeout(this.warningTimer);
    this.StartTimers();
}
StartTimers() {
  this.warningTimer = setTimeout(this.idleWarning, this.timoutWarning);
}
  @HostListener('mouseover') onMove() {
    this.ResetTimers();
  }
  @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
      this.ResetTimers();
}

}
