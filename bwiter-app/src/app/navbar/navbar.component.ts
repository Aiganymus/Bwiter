import { Component, OnInit } from '@angular/core';
import { User } from '../shared/services/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
public bwits: any = "29,2 тыс";
public followers: any = "60 млн";
public following: any = "145";
  mode = "Написать";
public name:any ="Rihanna";
public username:any ="@rihanna";
public date:any ="май 2019 г.";
user: User = {
  id: 1,
  username: 'the_example',
  nickname: 'Example User',
  avatar: 'https://delo.ua/files/news/images/3374/56/picture2_kompanija-disney-_337456_p0.jpg',
  status: 'dksjfhkdlsjflksdjfl',
  joined_at: '2019-05-12 12:12:12',
  wallpaper: 'https://delo.ua/files/news/images/3374/56/picture2_kompanija-disney-_337456_p0.jpg',
  folliwing: 100,
  followers: 100,
  bwits: 200,
};
  constructor() { }

  ngOnInit() {
  }

}
