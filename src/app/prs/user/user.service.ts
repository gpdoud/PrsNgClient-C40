import { Injectable } from '@angular/core';
import { AppInitService } from 'src/app/app-init.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = `http://localhost:5555/api/users`;

  constructor(
    private init: AppInitService,
    private http: HttpClient
  ) { }


  login(username: string, password: string): Observable<User> {
    return this.http.get(`${this.url}/${username}/${password}`) as Observable<User>;
  }
  list(): Observable<User[]> {
    return this.http.get(`${this.url}`) as Observable<User[]>;
  }
  get(id: number): Observable<User> {
    return this.http.get(`${this.url}/${id}`) as Observable<User>;
  }
  create(user: User): Observable<User> {
    return this.http.post(`${this.url}`, user) as Observable<User>;
  }
  change(user: User): Observable<any> {
    return this.http.put(`${this.url}/${user.id}`, user) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
