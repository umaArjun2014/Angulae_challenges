import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  retrievedUser = {};
  constructor(private userService: UserDetailsService, private route: ActivatedRoute) {
    this.retrievedUser = this.userService.sendUserInfo();  // Show logged user info

  }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    // for (const user of this.userService.getUsersFromLocal()) {
    //   if (user.id) {
    //     this.retrievedUser = user;
    //   }
    // }
  }

}
