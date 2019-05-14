import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user-services/user.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.get
  }

}
