import { Component, OnInit, HostListener, HostBinding, ViewChild} from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public usersList = [];
  userExist;
  private timoutWarning = 300000;
  private timoutNow = 600000;
  private warningTimer;
  public isToggleChecked = true;
  public listOfUsers = [];
  public labelForTable;
  displayedColumns: string[] = ['email', 'fullname', 'phone', 'gender'];
  usersColumns: string[] = ['userId', 'id', 'title', 'completed'];
  dataSource = new MatTableDataSource([]);

  @HostBinding('class.hostBinding') public isUserActive: boolean;
  constructor(private userService: UserDetailsService, private router: Router, private httpService: HttpServiceService) {
    this.StartTimers();
  }

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngOnInit() {
    this.isUserActive = false;
    this.labelForTable = 'List Of Admins';
    this.usersList = this.userService.getUsersFromLocal();
  }
  getUserInfo(userData) {
    this.userService.getUserInfo(userData);
    this.router.navigate(['/userInfo', {id: userData.id}]);
  }
  private idleWarning = () => {
    alert('your ideal since longer,appln is going to logout');
    this.router.navigate(['/login']);
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

fetchUsers() {
  if (!this.isToggleChecked) {
    this.labelForTable = 'List Of Admins';
  } else {
    this.httpService.sendGetReponce().subscribe((data: any[]) => {
      this.listOfUsers = data;
      this.dataSource.data = this.listOfUsers;
      this.labelForTable = 'List Of Users';
    });
  }
}
}
