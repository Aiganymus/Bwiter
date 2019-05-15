import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/services/user-services/user.service';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  public mode = false;
  users: User[];
  user: User;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    if (this.router.url.includes('followers')) {
      this.userService.getFollowing(this.user.id)
          .then(res => {
            this.users = res;
          });
    } else {
      this.userService.getFollowers(this.user.id)
      .then(res => {
        this.users = res;
      });
    }
  }
}
