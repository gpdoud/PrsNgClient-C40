import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../system/system.service';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  get url() { return `${this.sys.baseurl}/api/requests`; }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<Request[]> {
    return this.http.get(`${this.url}`) as Observable<Request[]>;
  }
  get(id: number): Observable<Request> {
    return this.http.get(`${this.url}/${id}`) as Observable<Request>;
  }
  reviews(userId: number): Observable<Request[]> {
    return this.http.get(`${this.url}/reviews/${userId}`) as Observable<Request[]>;
  }
  create(req: Request): Observable<Request> {
    return this.http.post(`${this.url}`, req) as Observable<Request>;
  }
  change(req: Request): Observable<any> {
    return this.http.put(`${this.url}/${req.id}`, req) as Observable<any>;
  }
  review(req: Request): Observable<any> {
    return this.http.put(`${this.url}/review/${req.id}`, req) as Observable<any>;
  }
  approve(req: Request): Observable<any> {
    return this.http.put(`${this.url}/approve/${req.id}`, req) as Observable<any>;
  }
  reject(req: Request): Observable<any> {
    return this.http.put(`${this.url}/reject/${req.id}`, req) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
