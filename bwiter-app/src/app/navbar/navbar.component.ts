import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user-services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: User;
  mode: string;
  bwits = '';
  followers ='';
  followings = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .then(res => {
        this.user = res;
        this.userService.bwitsCount(this.user.id)
            .then(res => {
              this.bwits = res['bwits_count'];
              this.userService.followersCount(this.user.id)
                  .then(res1 => {
                    this.followers = res1['bwits_count'];
                    this.userService.followingsCount(this.user.id)
                        .then(res2 => {
                          this.followings = res2['bwits_count'];
                        });
                  })
            });
      });
    this.mode = 'edit';
  }

}
