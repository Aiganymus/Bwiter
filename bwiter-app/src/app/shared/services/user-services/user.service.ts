import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User = {
    id: 1,
    username: 'aiganym',
    profile_pic: 'https://unsplash.imgix.net/photo-1421986527537-888d998adb74?q=75&fm=jpg&s=e633562a1da53293c4dc391fd41ce41d',
    nickname: 'aiganymus',
    joined_at: '2019-06-12 12:12:12'
  };
  DJANGO_SERVER = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  createUser(input: FormData): Promise<User> {
    return this.http.post<User>(`${this.DJANGO_SERVER}/api/users`, input).toPromise();
  }

  updateUser(input: FormData): Promise<User> {
    return this.http.put<User>(`${this.DJANGO_SERVER}/api/users`, input).toPromise();
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  destroyCurrentUser() {
    this.createUser = null;
  }
}
