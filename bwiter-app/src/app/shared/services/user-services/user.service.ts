import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User;
  DJANGO_SERVER = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  createUser(input: FormData): Promise<User> {
    return this.http.post<User>(`${this.DJANGO_SERVER}/api/users/`, input).toPromise();
  }

  updateUser(input: FormData, id: string): Promise<User> {
    return this.http.put<User>(`${this.DJANGO_SERVER}/api/users/${id}`, input).toPromise();
  }

  deleteUser(id: string) {
    return this.http.delete<User>(`${this.DJANGO_SERVER}/api/users/${id}`).toPromise();
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  destroyCurrentUser() {
    this.currentUser = undefined;
    localStorage.removeItem('token');
  }
  getFollowers(id: number): Promise<User[]>{
    return this.http.get<User[]>(`${this.DJANGO_SERVER}/api/users/${id}/followers`).toPromise();
  }
}
