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
  private timoutWarning = 500000;
  private warningTimer;
  public isToggleChecked = true;
  public listOfUsers = [];
  public labelForTable;
  displayedColumns: string[] = ['email', 'fullname', 'phone', 'gender']; // Display column names for admin table
  usersColumns: string[] = ['userId', 'id', 'title', 'completed']; // Display column names for users
  dataSource = new MatTableDataSource([]);

  @HostBinding('class.hostBinding') public isUserActive: boolean;
  constructor(private userService: UserDetailsService, private router: Router, private httpService: HttpServiceService) {
    this.StartTimers();
  }
  // paginator used for users table only
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngOnInit() {
    this.isUserActive = false;
    this.labelForTable = 'List Of Admins';
    this.usersList = this.userService.getUsersFromLocal();
  }

  // fetch the userinfo on id basis to show specific user detalis
  getUserInfo(userData) {
    this.userService.getUserInfo(userData);
    this.router.navigate(['/userInfo', {id: userData.id}]);
  }

  // logout the application if user exceeds his time 15min
  private idleWarning = () => {
    alert('your ideal since longer,application is going to be logout');
    this.router.navigate(['/login']);
  }
  // reset timer if user is exist in the application or performing any operation
  ResetTimers() {
    clearTimeout(this.warningTimer);
    this.StartTimers();
  }
  // Timer will be start once user enters into this page
  StartTimers() {
    this.warningTimer = setTimeout(this.idleWarning, this.timoutWarning);
  }
  // On mouseover time will reset to 15min for every time
  @HostListener('mouseover') onMove() {
    this.ResetTimers();
  }
  // On keyup time will reset to 15min for every time
  @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
      this.ResetTimers();
}

// Fetch users data from API and assigned to data source for tablerview
fetchUsers() {
  if (!this.isToggleChecked) {
    this.labelForTable = 'List Of Admins';
  } else {
    this.labelForTable = 'List Of Users';

    this.httpService.sendGetReponce().subscribe((data: any[]) => {
      this.listOfUsers = data;
    });
  }
}
}
