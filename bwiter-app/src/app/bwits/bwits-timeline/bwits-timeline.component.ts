import { Component, OnInit } from '@angular/core';
import { BwitService } from 'src/app/shared/services/bwit-services/bwit.service';
import { Bwit } from 'src/app/shared/models/bwit';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user-services/user.service';

@Component({
  selector: 'app-bwits-timeline',
  templateUrl: './bwits-timeline.component.html',
  styleUrls: ['./bwits-timeline.component.scss']
})
export class BwitsTimelineComponent implements OnInit {
  bwits: Bwit[];
  user: User;

  constructor(private bwitService: BwitService,
              private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.bwitService.getBwits(this.user.id)
        .then(res => {
          this.bwits = res;
          console.log(this.bwits);
        });
  }

}
