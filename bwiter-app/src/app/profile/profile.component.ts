import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

public nickname:any ="Rihanna";
public username:any ="@rihanna";
public joined_at:any ='2019-05-14 12:12:12';
public status:any ="Халява битч";

  constructor() { }

  ngOnInit() {
  }

}
