import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss']
})
export class FollowerComponent implements OnInit {
  user: User = {
    id: 1,
    username: 'the_example',
    nickname: 'Example User',
    profile_pic: 'https://unsplash.imgix.net/photo-1421986527537-888d998adb74?q=75&fm=jpg&s=e633562a1da53293c4dc391fd41ce41d',
    status: 'dksjfhkdlsjflksdjfl',
    joined_at: '2019-05-12 12:12:12',
  };

  constructor() { }

  ngOnInit() {
  }

}
