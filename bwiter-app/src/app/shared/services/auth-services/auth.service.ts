import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  DJANGO_SERVER = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  login(creds: User): Promise<Token> {
    return this.http.post<Token>(`${this.DJANGO_SERVER}/api/login/`, creds).toPromise();
  }

  register(input: FormData): Promise<User> {
    return this.http.post<User>(`${this.DJANGO_SERVER}/api/users`, input).toPromise();
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

}
