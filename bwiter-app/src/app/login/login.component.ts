import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth-services/auth.service';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user-services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  creds: User = {
    username: '',
    password: ''
  };

  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService) {}

  ngOnInit() {}

  onSubmit() {
    this.authService.login(this.creds).then(result => {
      this.userService.setCurrentUser(result['user']);
      console.log('I logged in', result);
      localStorage.setItem('token', result['token']);
      this.router.navigateByUrl('');
    });
  }
}
