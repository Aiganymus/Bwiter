import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
public bwits: any = "29,2 тыс";
public followers: any = "60 млн";
public following: any = "145";  
  mode = "Читать";
public name:any ="Rihanna";
public username:any ="@rihanna";
public date:any ="май 2019 г.";
  constructor() { }

  ngOnInit() {
  }

}
