import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user-services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  users: User [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers()
        .then(res => {
          this.users = res;
        });
  }

}
