import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user-services/user.service';
import { User } from '../shared/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  user: User;
  public followers:User[]=[];

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.userService.getFollowers(this.user.id) .then (res => {
      this.followers = res;
    });

  }

}
