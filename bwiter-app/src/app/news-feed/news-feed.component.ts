import { Component, OnInit } from '@angular/core';
import { Bwit } from '../shared/models/bwit';
import { UserService } from '../shared/services/user-services/user.service';
import { User } from '../shared/models/user';
import { BwitService } from '../shared/services/bwit-services/bwit.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  user: User;

  constructor(private bwitService: BwitService,
              private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }


}
