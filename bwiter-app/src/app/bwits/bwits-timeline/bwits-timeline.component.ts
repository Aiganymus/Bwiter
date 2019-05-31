import { Component, OnInit } from '@angular/core';
import { BwitService } from 'src/app/shared/services/bwit-services/bwit.service';
import { Bwit } from 'src/app/shared/models/bwit';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user-services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bwits-timeline',
  templateUrl: './bwits-timeline.component.html',
  styleUrls: ['./bwits-timeline.component.scss']
})
export class BwitsTimelineComponent implements OnInit {
  bwits: Bwit[];
  user: User;

  constructor(private bwitService: BwitService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.userService.getCurrentUser()
        .then(res => {
          this.user = res;
          if (!this.router.url.includes('timeline')) {
            this.bwitService.getBwits()
              .then(result => {
                this.bwits = result;
                console.log(this.bwits);
              });
          } else {
            this.bwitService.getUserBwits(this.user.id)
              .then(result => {
                this.bwits = result;
                console.log(this.bwits);
              });
          }
        });
  }
}
