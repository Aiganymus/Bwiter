import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from 'src/app/shared/services/models/token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit() {}
  creds = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post<Token>('http://127.0.0.1:8000/api/login/', this.creds).subscribe(result => {
      console.log('I logged in', result.token);
      localStorage.setItem('token', result.token);
      this.router.navigateByUrl('');
    });
  }
}
