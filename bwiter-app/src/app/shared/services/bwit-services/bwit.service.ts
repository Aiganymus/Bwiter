import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Bwit } from '../../models/bwit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BwitService {
  DJANGO_SERVER = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getBwits(): Promise<Bwit[]> {
    return this.http.get<Bwit[]>(`${this.DJANGO_SERVER}/api/bwits`).toPromise();
  }

  getBwit(id: string): Promise<Bwit> {
    return this.http.get<Bwit>(`${this.DJANGO_SERVER}/api/bwits/${id}`).toPromise();
  }
  createBwit(bwit: FormData): Promise<Bwit> {
    return this.http.post<Bwit>(`${this.DJANGO_SERVER}/api/bwits/`, bwit).toPromise();
  }
}
