import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user-services/user.service';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-hodor',
  templateUrl: './hodor.component.html',
  styleUrls: ['./hodor.component.scss']
})
export class HodorComponent implements OnInit {
  user: User;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    console.log(this.user);
  }

  logout() {
    this.userService.destroyCurrentUser();
    this.router.navigateByUrl('login');
  }

}
