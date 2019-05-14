import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user-services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hodor',
  templateUrl: './hodor.component.html',
  styleUrls: ['./hodor.component.scss']
})
export class HodorComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.userService.destroyCurrentUser();
    this.router.navigateByUrl('registration');
  }

}
