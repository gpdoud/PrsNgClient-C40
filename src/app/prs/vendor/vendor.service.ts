import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../system/system.service';
import { Vendor } from './vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  
  get url() { return `${this.sys.config.baseurl}/api/vendors`; }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<Vendor[]> {
    return this.http.get(`${this.url}`) as Observable<Vendor[]>;
  }
  get(id: number): Observable<Vendor> {
    return this.http.get(`${this.url}/${id}`) as Observable<Vendor>;
  }
  create(vend: Vendor): Observable<Vendor> {
    return this.http.post(`${this.url}`, vend) as Observable<Vendor>;
  }
  change(vend: Vendor): Observable<any> {
    return this.http.put(`${this.url}/${vend.id}`, vend) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
