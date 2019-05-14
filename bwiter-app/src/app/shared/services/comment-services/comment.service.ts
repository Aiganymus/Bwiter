import { Injectable } from '@angular/core';
import { Comment } from '../../models/comment';
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
  constructor() { }

  getComments(id: string) {
    return this.comments;
  }
}
