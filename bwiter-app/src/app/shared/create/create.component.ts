import { Component, OnInit } from '@angular/core';
import { User } from '../services/models/user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  submitted = false;
  user: User = {
    id: 1,
    username: '',
    avatar: 'https://unsplash.imgix.net/photo-1421986527537-888d998adb74?q=75&fm=jpg&s=e633562a1da53293c4dc391fd41ce41d',
    nickname: ''
  };
  body = '';

  constructor() { }

  ngOnInit() {
  }

  submit() {
    if (!this.body || this.body.length > 20) {
      this.submitted = true;
      return;
    }
  }

}
