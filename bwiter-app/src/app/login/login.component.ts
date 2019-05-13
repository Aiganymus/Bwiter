import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth-services/auth.service';
import { User } from '../shared/services/models/user';

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
              private authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    this.authService.login(this.creds).then(result => {
      console.log('I logged in', result.token);
      localStorage.setItem('token', result.token);
      this.router.navigateByUrl('');
    });
  }
}
