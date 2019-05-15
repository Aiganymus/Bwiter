import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user-services/user.service';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss']
})
export class FollowerComponent implements OnInit {
  @Input() user: User;
  mode = 'читаю';

  constructor(private route: Router,
              private userService: UserService) { }

  ngOnInit() {
    if (this.route.url.includes('users')) {
      this.mode = 'follow';
    }
  }

  follow() {
    this.userService.makeMutual(this.user.id)
        .then(res => {
          console.log(res);
          window.location.reload();
        });
  }

}
