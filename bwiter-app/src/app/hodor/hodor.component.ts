import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user-services/user.service';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { AuthService } from '../shared/services/auth-services/auth.service';

@Component({
  selector: 'app-hodor',
  templateUrl: './hodor.component.html',
  styleUrls: ['./hodor.component.scss']
})
export class HodorComponent implements OnInit {
  user: User;
  constructor(private userService: UserService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .then(res => {
        this.user = res;
      });
  }

  logout() {
    this.userService.destroyCurrentUser();
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
