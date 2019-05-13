import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Bwit } from './models/bwit';

@Injectable({
  providedIn: 'root'
})
export class BwitService {
  bwit: Bwit[] = [
    {
      id: 1,
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque! #lorem2015',
      created_at: '2019-02-18 12:12:12',
      author: {
        id: 1,
        username: 'the_example',
        nickname: 'Example User',
        avatar: 'https://unsplash.imgix.net/photo-1421986527537-888d998adb74?q=75&fm=jpg&s=e633562a1da53293c4dc391fd41ce41d'
      },
      likes: 49,
      comments: 10,
      picture: 'https://unsplash.imgix.net/photo-1421986527537-888d998adb74?q=75&fm=jpg&s=e633562a1da53293c4dc391fd41ce41d'
    },
    {
      id: 2,
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque! #lorem2015',
      created_at: '2019-02-18 12:12:12',
      author: {
        id: 1,
        username: 'the_example',
        nickname: 'Example User',
        avatar: 'https://unsplash.imgix.net/photo-1421986527537-888d998adb74?q=75&fm=jpg&s=e633562a1da53293c4dc391fd41ce41d'
      },
      likes: 0,
      comments: 123
    },
    {
      id: 3,
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque! #lorem2015',
      created_at: '2019-02-18 12:12:12',
      author: {
        id: 1,
        username: 'the_example',
        nickname: 'Example User',
        avatar: 'https://unsplash.imgix.net/photo-1421986527537-888d998adb74?q=75&fm=jpg&s=e633562a1da53293c4dc391fd41ce41d'
      },
      likes: 23,
      comments: 0
    }
  ];

  constructor() { }

  getBwits(): Observable<Bwit[]> {
    return of<Bwit[]>(this.bwit);
  }
}
