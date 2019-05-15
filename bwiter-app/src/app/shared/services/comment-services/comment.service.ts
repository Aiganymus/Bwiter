import { Injectable } from '@angular/core';
import { Comment } from '../../models/comment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  DJANGO_SERVER = 'http://127.0.0.1:8000';
  private comments: Comment[] = [{
    id: 1,
    body: 'adcfvgbhmtnf;',
    created_at: '2019-06-12 12:12:12',
    author: {
      id: 1,
      username: 'aiganym',
      profile_pic: 'https://unsplash.imgix.net/photo-1421986527537-888d998adb74?q=75&fm=jpg&s=e633562a1da53293c4dc391fd41ce41d',
      nickname: 'aiganymus',
      joined_at: '2019-06-12 12:12:12'
    }
  }];
  constructor(private http:HttpClient) { }

  // getComments(id: string) {
  //   return this.comments;
  // }

  getComments(id:string): Promise<Comment[]> {
    return this.http.get<Comment[]>(`${this.DJANGO_SERVER}/api/bwits/${id}/comments`).toPromise();
  }


  postComment(body:string, id:string) {
    let data = {'body':body}
    return this.http.post(`${this.DJANGO_SERVER}/api/bwits/${id}/comments/`, data).toPromise();
  }
}
