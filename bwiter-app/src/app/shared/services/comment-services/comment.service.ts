import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  DJANGO_SERVER = 'http://127.0.0.1:8000';

  constructor() { }
}
