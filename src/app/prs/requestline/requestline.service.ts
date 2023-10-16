import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../system/system.service';
import { Requestline } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  get url() { return `${this.sys.config.baseurl}/api/requestlines`; }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  get(id: number): Observable<Requestline> {
    return this.http.get(`${this.url}/${id}`) as Observable<Requestline>;
  }
  create(reql: Requestline): Observable<Requestline> {
    return this.http.post(`${this.url}`, reql) as Observable<Requestline>;
  }
  change(reql: Requestline): Observable<any> {
    return this.http.put(`${this.url}/${reql.id}`, reql) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
