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
    return this.http.put<User>(`${this.DJANGO_SERVER}/api/users/${id}/`, input).toPromise();
  }

  deleteUser(id: string) {
    return this.http.delete<User>(`${this.DJANGO_SERVER}/api/users/${id}`).toPromise();
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

  getCurrentUser(): Promise<User> {
    return this.http.get<User>(`${this.DJANGO_SERVER}/api/current`).toPromise();
  }

  getFollowing(id: number): Promise<User[]>{
    return this.http.get<User[]>(`${this.DJANGO_SERVER}/api/users/${id}/following`).toPromise();
  }

  getAllUsers(): Promise<User[]> {
    return this.http.get<User[]>(`${this.DJANGO_SERVER}/api/all_users/`).toPromise();
  }

  makeMutual(id: number): Promise<any> {
    console.log(id);
    return this.http.post<any>(`${this.DJANGO_SERVER}/api/connections/${id}/`, {}).toPromise();
  }

  bwitsCount(id: number): Promise<any> {
    return this.http.get<any>(`${this.DJANGO_SERVER}/api/users/${id}/bwit_count/`).toPromise();
  }

  followersCount(id: number): Promise<any> {
    return this.http.get<any>(`${this.DJANGO_SERVER}/api/users/${id}/followers_count/`).toPromise();
  }

  followingsCount(id: number): Promise<any> {
    return this.http.get<any>(`${this.DJANGO_SERVER}/api/users/${id}/followed_count/`).toPromise();
  }
}
