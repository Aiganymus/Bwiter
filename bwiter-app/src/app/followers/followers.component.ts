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
  public folowers:User[]=[];

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
     const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'))
    this.userService.getFollowers(id) .then (res => console.log(res));
  }

}
